var imgArray1 = new Array();	//공부
imgArray1[0] = "../image/array1A.jpg";
imgArray1[1] = "../image/array1B.jpg";
imgArray1[2] = "../image/array1C.jpg";
var imgArray2 = new Array();	//다이어트
imgArray2[0] = "../image/array2A.jpg";
var imgArray3 = new Array();	//취업
imgArray3[0] = "../image/array3A.jpg";
imgArray3[1] = "../image/array3B.jpg";
var imgArray4 = new Array();	//연애
imgArray4[0] = "../image/array4A.jpg";
imgArray4[1] = "../image/array4B.jpg";
imgArray4[2] = "../image/array4C.jpg";
var imgArray5 = new Array();	//위로
imgArray5[0] = "../image/array5A.jpg";
imgArray5[1] = "../image/array5B.jpg";

var playArray1 = new Array();	//공부
playArray1[0] = "../image/play1A.mp3";
playArray1[1] = "../image/play1B.mp3";
playArray1[2] = "../image/play1C.mp3";
var playArray2 = new Array();	//다이어트
playArray2[0] = "../image/play2A.mp3";
var playArray3 = new Array();	//취업
playArray3[0] = "../image/play3A.mp3";
playArray3[1] = "../image/play3B.mp3";
var playArray4 = new Array();	//연애
playArray4[0] = "../image/play4A.mp3";
playArray4[1] = "../image/play4B.mp3";
playArray4[2] = "../image/play4C.mp3";
var playArray5 = new Array();	//위로
playArray5[0] = "../image/play5A.mp3";
playArray5[1] = "../image/play5B.mp3";

function show() {
    var imgNum = Math.round(Math.random() * 2);
	if(text == "공부"){
	    var objImg = document.getElementById("image");
	    objImg.src = imgArray1[imgNum];
	    var objPlay = document.getElementById("iframe");
	    objPlay.src = playArray1[imgNum];
	}else if(text == "다이어트"){
		imgNum = 0;
	    var objImg = document.getElementById("image");
	    objImg.src = imgArray2[imgNum];
	    var objPlay = document.getElementById("iframe");
	    objPlay.src = playArray2[imgNum];
	}else if(text == "취업"){
		imgNum = Math.round(Math.random() * 1);
	    var objImg = document.getElementById("image");
	    objImg.src = imgArray3[imgNum];
	    var objPlay = document.getElementById("iframe");
	    objPlay.src = playArray3[imgNum];
	}else if(text == "연애"){
	    var objImg = document.getElementById("image");
	    objImg.src = imgArray4[imgNum];
	    var objPlay = document.getElementById("iframe");
	    objPlay.src = playArray4[imgNum];
	}else if(text == "위로"){
		imgNum = Math.round(Math.random() * 1);
	    var objImg = document.getElementById("image");
	    objImg.src = imgArray5[imgNum];
	    var objPlay = document.getElementById("iframe");
	    objPlay.src = playArray5[imgNum];
	}
}


function printClock() {
    var clock = document.getElementById("clock")
    var currentDate = new Date();
    var calendar = currentDate.getFullYear() + "년 " + (currentDate.getMonth() + 1) + "월 " + currentDate.getDate() + "일";
    var amPm = '오전';
    var currentHours = addZeros(currentDate.getHours(), 2);
    var currentMinute = addZeros(currentDate.getMinutes(), 2);
    var currentSeconds = addZeros(currentDate.getSeconds(), 2);

    if (currentHours >= 12) {
        amPm = '오후';
        currentHours = addZeros(currentHours - 12, 2);
    }

    clock.innerHTML = "<span style='font-size:40px;'>" + calendar + "</span><br>" + "<span style='font-size:50px;margin-right:30px;'>" + amPm + "</span>" + currentHours + ":" + currentMinute + ":" + currentSeconds;

    setTimeout("printClock()", 1000);
}

function printClock_image() {
    var clock = document.getElementById("clock")
    var currentDate = new Date();
    var calendar = currentDate.getFullYear() + "년 " + (currentDate.getMonth() + 1) + "월 " + currentDate.getDate() + "일";
    var amPm = '오전';
    var currentHours = addZeros(currentDate.getHours(), 2);
    var currentMinute = addZeros(currentDate.getMinutes(), 2);
    var currentSeconds = addZeros(currentDate.getSeconds(), 2);

    if (currentHours >= 12) {
        amPm = '오후';
        currentHours = addZeros(currentHours - 12, 2);
    }

    clock.innerHTML = "<span style='font-size:40px;'>" + calendar + "</span><br>" + "<span style='font-size:50px;margin-right:30px;'>" + amPm + "</span>" + currentHours + ":" + currentMinute + ":" + currentSeconds;

    setTimeout("printClock()", 1000);
    setTimeout("history.back()", 5000);
}

function addZeros(num, digit) {
    var zero = '';
    num = num.toString();
    if (num.length < digit) {
        for (i = 0; i < digit - num.length; i++) {
            zero += '0';
        }
    }
    return zero + num;
}
