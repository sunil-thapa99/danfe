const HOURHAND = document.querySelectorAll("#hour");
const MINUTEHAND = document.querySelectorAll("#minute");
const SECONDHAND = document.querySelectorAll("#second");
console.log(HOURHAND, MINUTEHAND);
const TIME = document.querySelectorAll('#time');
function getDate(){
	var time = new Date();
	var utc = time.getTime() + time.getTimezoneOffset() * 60000;
	var berlin = new Date(utc + (3600000*(+2)));
	var minutes = berlin.getMinutes();
	var seconds = berlin.getSeconds();
	var hr = berlin.getHours();
	MINUTEHAND[0].style.transform = 'rotate(' + 6*minutes + 'deg)';
	SECONDHAND[0].style.transform = 'rotate(' + 6*seconds + 'deg)';
	HOURHAND[0].style.transform = 'rotate(' + 30*hr + 'deg)';
	TIME[0].innerHTML = 'Time: ' + hr + ':' + minutes + ':'+seconds;
}
setInterval(getDate, 1000);

function getDate1(){
	var time = new Date();
	var utc = time.getTime() + time.getTimezoneOffset() * 60000;
	var sydney = new Date(utc + (3600000*(+10)));
	var minutes = sydney.getMinutes();
	var seconds = sydney.getSeconds();
	var hr = sydney.getHours();
	MINUTEHAND[1].style.transform = 'rotate(' + 6*minutes + 'deg)';
	SECONDHAND[1].style.transform = 'rotate(' + 6*seconds + 'deg)';
	HOURHAND[1].style.transform = 'rotate(' + 30*hr + 'deg)';
	TIME[1].innerHTML = 'Time: ' + hr + ':' + minutes + ':'+seconds;
}
setInterval(getDate1, 1000);


function getDate2(){
	var time = new Date();
	var utc = time.getTime() + time.getTimezoneOffset() * 60000;
	var newYork = new Date(utc + (3600000*(-4)));
	var minutes = newYork.getMinutes();
	var seconds = newYork.getSeconds();
	var hr = newYork.getHours();
	MINUTEHAND[2].style.transform = 'rotate(' + 6*minutes + 'deg)';
	SECONDHAND[2].style.transform = 'rotate(' + 6*seconds + 'deg)';
	HOURHAND[2].style.transform = 'rotate(' + 30*hr + 'deg)';
	TIME[2].innerHTML = 'Time: ' + hr + ':' + minutes + ':'+seconds;
}
setInterval(getDate2, 1000);

function getDate3(){
	var time = new Date();
	var minutes = time.getMinutes();
	var seconds = time.getSeconds();
	var hr = time.getHours();
	MINUTEHAND[3].style.transform = 'rotate(' + 6*minutes + 'deg)';
	SECONDHAND[3].style.transform = 'rotate(' + 6*seconds + 'deg)';
	HOURHAND[3].style.transform = 'rotate(' + 30*hr + 'deg)';
	TIME[3].innerHTML = 'Time: ' + hr + ':' + minutes + ':'+seconds;
}
setInterval(getDate3, 1000);