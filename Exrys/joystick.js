var express = require('express')

// Calling express:

var app = express();
var http = require('http').Server(app);
var server = http.listen(8081, function(){
	console.log("Server running.")
});

// Starting socket.io:

var io = require('socket.io')(server, {origins:'*:*'});

app.get('/', function (req, res){
    res.send('Hello World');
});


// Connect socket.io:

/*	tw.on('tweet',function(tweet) {
	io.emit('tweet', tweet);
});	*/

// Starting johnny-five:

var five = require("johnny-five");
var board = new five.Board({port:"COM5"})

board.on("ready", function(){
	console.log("Arduino found.")

	var buttonUp = new five.Button(4)
	var buttonDown = new five.Button(5)
	var buttonLeft = new five.Button(2)
	var buttonRight = new five.Button(3)
	var buttonA = new five.Button(6)
	var buttonB = new five.Button(7)
	/*var buttonC = new five.Button(8)
	var buttonD = new five.Button(9)*/

	// Joystick up button:
	buttonUp.on("down", function(){
		console.log("press up")
		io.emit("move_up")
	})

	buttonUp.on("up", function(){
		console.log("dropped up")
		io.emit("stop_up")
	})

	//Joystick down button:
	buttonDown.on("down", function(){
		console.log("press down")
		io.emit("move_down")
	})

	buttonDown.on("up", function(){
		console.log("dropped down")
		io.emit("stop_down")
	})

	// Joystick left button:
	buttonLeft.on("down", function(){
		console.log("press left")
		io.emit("move_left")
	})

	buttonLeft.on("up", function(){
		console.log("dropped left")
		io.emit("stop_left")
	})

	// Joystick right button:
	buttonRight.on("down", function(){
		console.log("press right")
		io.emit("move_right")
	})

	buttonRight.on("up", function(){
		console.log("dropped right")
		io.emit("stop_right")
	})

	// Joystick A button: (RED FIRE)
	buttonA.on("down", function(){
		console.log("press A")
		io.emit("press_A")
	})
	
	buttonA.on("up", function(){
		console.log("dropped A")
		io.emit("stop_A")
	})

	// Joystick B button: (YELLOW SPECIAL)
	buttonB.on("down", function(){
		console.log("press B")
		io.emit("press_B")
	})
	
	buttonB.on("up", function(){
		console.log("dropped B")
		io.emit("stop_B")
	})

	// Joystick C button: (GREEN TRANSFORM)
	/*buttonC.on("down", function(){
		console.log("press C")
		io.emit("press_C")
	})
	
	buttonC.on("up", function(){
		console.log("dropped C")
		io.emit("stop_C")
	})

	// Joystick D button: (BLUE TURN)
	buttonD.on("down", function(){
		console.log("press D")
		io.emit("press_D")
	})
	
	buttonD.on("up", function(){
		console.log("dropped D")
		io.emit("stop_D")
	})*/
	
});