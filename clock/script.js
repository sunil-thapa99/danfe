var state = ['Sydney', 'Berlin', 'NewYork', 'Kathmandu'];
// Layout 
var layout = "<div class='clockbox'>"+
        "<svg id='clock' xmlns='http://www.w3.org/2000/svg' width='300' height='300'"+
        " viewBox='0 0 600 600'>"+
            "<g id='face'>"+
                "<circle class='circle' cx='300' cy='300' r='253.9'/>"+
                "<path class='hour-marks' d='M300.5 94V61M506 300.5h32M300.5 506v33M94"+
                " 300.5H60M411.3 107.8l7.9-13.8M493 190.2l13-7.4M492.1 411.4l16.5 9.5M411"+
                " 492.3l8.9 15.3M189 492.3l-9.2 15.9M107.7 411L93 419.5M107.5 "+
                "189.3l-17.1-9.9M188.1 108.2l-9-15.6'/>" +
                "<circle class='mid-circle' cx='300' cy='300' r='16.2'/>"+
            "</g>"+
            "<g id='hour'>"+
                "<path class='hour-arm' d='M300.5 298V142'/>"+
                "<circle class='sizing-box' cx='300' cy='300' r='253.9'/>"+
            "</g>"+
            "<g id='minute'>"+
                "<path class='minute-arm' d='M300.5 298V67'/>"+
                "<circle class='sizing-box' cx='300' cy='300' r='253.9'/>"+
            "</g>"+
            "<g id='second'>"+
                "<path class='second-arm' d='M300.5 350V55'/>"+
                "<circle class='sizing-box' cx='300' cy='300' r='253.9'/>"+
            "</g>"+
        "</svg>"+
    "</div>"+
    "<div class='digital'>"+
    	"<h3 id='place'></h3>"+
        "<h4 id='time'></h4>"+
    "</div>";

function main(){
	for (var i = 0; i < state.length; i++) {
		var element = document.getElementsByClassName(state[i].toLowerCase())[0].innerHTML = layout;
	}
}

document.addEventListener('DOMContentLoaded', main);

var HOURHAND, MINUTEHAND, SECONDHAND, TIME, PLACE;

function count(){
	HOURHAND = document.querySelectorAll("#hour");
	MINUTEHAND = document.querySelectorAll("#minute");
	SECONDHAND = document.querySelectorAll("#second");
	TIME = document.querySelectorAll('#time');
	PLACE = document.querySelectorAll('#place'); 
}
var counter = setInterval(count, 10);
setTimeout(function(){
	clearInterval(counter);
	for (var i = 0; i < state.length; i++) {
		PLACE[i].innerHTML = state[i];
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
},  1000);

function getDate(x, y){
	var time = new Date();
	var utc = time.getTime() + time.getTimezoneOffset() * 60000;
	var stateTime = new Date(utc + (3600000*(x)));
	var minutes = stateTime.getMinutes();
	var seconds = stateTime.getSeconds();
	var hr = stateTime.getHours();
	MINUTEHAND[y].style.transform = 'rotate(' + 6*minutes + 'deg)';
	SECONDHAND[y].style.transform = 'rotate(' + 6*seconds + 'deg)';
	HOURHAND[y].style.transform = 'rotate(' + 30*hr + 'deg)';
	TIME[y].innerHTML = 'Time: ' + hr + ':' + minutes + ':'+seconds;
}

