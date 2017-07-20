//引入ws,twit,rxjs
var WebSocketServer = require('ws').Server;
var Twit = require('twit');
var Rx = require('rxjs');

var T = new Twit({
	consumer_key: 'rFhfB5hFlth0BHC7iqQkEtTyw',
	consumer_secret: 'zcrXEM1jiOdKyiFFlGYFAOo43Hsz383i0cdHYYWqBXTBoVAr1x',
	access_token: '14343133-nlxZbtLuTEwgAlaLsmfrr3D4QAoiV2fa6xXUVEwW9',
	access_token_secret: '57Dr99wECljyyQ9tViJWz0H3obNG3V4cr5Lix9sQBXju1'
});
//Twitter客户端去连接Twitter和搜索tweets
var stream = T.stream('statuses/filter', {
track: 'earthquake',
locations: []
});
//订阅到这个stream并开始发送tweets到浏览器
Rx.Observable.fromEvent(stream, 'tweet').subscribe(function(tweetObject) {
	ws.send(JSON.stringify(tweetObject), function(err) {
		if (err) {
		console.log('There was an error sending the message');
		}
	});
});
//连接ws服务器，传递消息
function onConnect(ws) {
	var onMessage =	Rx.Observable
	.fromEvent(ws, 'message')
	.flatMap(function(quakesObj){
		quakesObj = JSON.parse(quakesObj);
		return Rx.Observable.from(quakesObj.quakes);
		})
		.scan([], function(boundsArray, quake) {
		var bounds = [
		quake.lng - 0.3, quake.lat - 0.15,
		quake.lng + 0.3, quake.lat + 0.15
		].map(function(coordinate) {
		coordinate = coordinate.toString();
		return coordinate.match(/\-?\d+(\.\-?\d{2})?/)[0];
	});
	boundsArray.concat(bounds);
	return boundsArray.slice(Math.max(boundsArray.length - 50, 0));
	})
	.subscribe(function(boundsArray) {
	stream.stop();
	stream.params.locations = boundsArray.toString();
	stream.start();
	});
	console.log('Client connected on localhost:8080');
}
var Server = new WebSocketServer({ port: 8080 });
Rx.Observable.fromEvent(Server, 'connection').subscribe(onConnect);

