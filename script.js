setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

var currentDate;
var secondsRatio;
var minutesRatio;
var hoursRatio;

function setClock() {
    currentDate = new Date();
    secondsRatio = currentDate.getSeconds() / 60;
    minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
	
	
	
	setRotation(secondHand, secondsRatio);
setRotation(minuteHand, minutesRatio);
setRotation(hourHand, hoursRatio);
}


function setRotation(element, rotationRatio) {
	//console.log(element);
	//console.log(rotationRatio);
    element.style.setProperty('--rotation', rotationRatio * 360);
	
}

setClock();