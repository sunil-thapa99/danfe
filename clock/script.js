const HOURHAND = document.querySelectorAll("#hour");
const MINUTEHAND = document.querySelectorAll("#minute");
const SECONDHAND = document.querySelectorAll("#second");
const TIME = document.querySelectorAll('#time');
function getDate(x, y){
	var time = new Date();
	var utc = time.getTime() + time.getTimezoneOffset() * 60000;
	var stateTime = new Date(utc + (3600000*(x)))
	var minutes = stateTime.getMinutes();
	var seconds = stateTime.getSeconds();
	var hr = stateTime.getHours();
	MINUTEHAND[y].style.transform = 'rotate(' + 6*minutes + 'deg)';
	SECONDHAND[y].style.transform = 'rotate(' + 6*seconds + 'deg)';
	HOURHAND[y].style.transform = 'rotate(' + 30*hr + 'deg)';
	TIME[y].innerHTML = 'Time: ' + hr + ':' + minutes + ':'+seconds;
}
setInterval(function(){
		getDate(+10, 0);
	}, 1000);
setInterval(function(){
		getDate(+2, 1);
	}, 1000);
setInterval(function(){
		getDate(-4, 2);
	}, 1000);
setInterval(function(){
		getDate(+5.75, 3);
	}, 1000);

// var berlin = new Date(utc + (3600000*(+2)));
// var sydney = new Date(utc + (3600000*(+10)));
// var newYork = new Date(utc + (3600000*(-4)));