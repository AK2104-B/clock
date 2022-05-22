setInterval(setclock,1000)
const hourHand =document.querySelector('[data-hour-hand]')
const minuteHand =document.querySelector('[data-min-hand]')
const secondHand =document.querySelector('[data-sec-hand]')
const music=new Audio('clock music.mp3');
function setclock(){
    const currentDate=new Date();  
    const secondsRatio =currentDate.getSeconds()/60;
    const minutesRatio =(secondsRatio + currentDate.getMinutes())/60;
    const hoursRatio =(minutesRatio +currentDate.getHours())/12
    setrotation(secondHand,secondsRatio)
    setrotation(minuteHand,minutesRatio)
    setrotation(hourHand,hoursRatio)
   
    }
function setrotation(element,rotationRatio){
    element.style.setProperty('--rotation',rotationRatio*360)
    music.play();
}
setclock();