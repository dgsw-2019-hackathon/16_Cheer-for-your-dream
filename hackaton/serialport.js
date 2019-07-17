$(document).ready(function(){
var SerialPort = require('serialport'),
    portName = 'COM5',
    sp = new SerialPort(portName),
    sensorVal = 0;

sp.on('open', function(){
    console.log('Serial Port OPEN');
    sp.on('data', function(data){
        console.log("Sensor Value : ", data[0]);
        if(data[0] >= 1){
        	location.href="image.jsp";
        }
    });
});
});
