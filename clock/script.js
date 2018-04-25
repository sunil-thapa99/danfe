const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");
const TIME = document.querySelector('#time');
var time;
var hr;
var minutes;
var seconds;
function getDate(){
	time = new Date();
	hr = time.getHours();
	minutes = time.getMinutes();
	seconds = time.getSeconds();
	MINUTEHAND.style.transform = 'rotate(' + 6*minutes + 'deg)';
	SECONDHAND.style.transform = 'rotate(' + 6*seconds + 'deg)';
	HOURHAND.style.transform = 'rotate(' + 30*hr + 'deg)';
	TIME.innerHTML = 'Time: ' + hr + ':' + minutes + ':'+seconds;
	// console.log(hr + " " + minutes + " " + seconds);
}
// document.addEventListener('DOMContentLoaded', getDate);
setInterval(getDate, 1000);
