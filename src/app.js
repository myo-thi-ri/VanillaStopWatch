window.onload = function (){
    let minutes = 00;
    let seconds = 00;
    let tenths = 00;


const appendMinutes = document.getElementById('minutes');
const appendSeconds = document.getElementById('seconds');
const appendTenths = document.getElementById('tenths');

const buttonStart = document.getElementById('button-start');
const buttonStop = document.getElementById('button-stop');
const buttonReset = document.getElementById('button-reset');

let Interval;

buttonStart.onclick = function (){
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
}

buttonStop.onclick = function(){
    clearInterval(Interval);
}

buttonReset.onclick = function(){
    clearInterval(Interval);
    
    appendMinutes.innerHTML = "00";
    appendSeconds.innerHTML = "00";
    appendTenths.innerHTML = "00";
}

function startTimer(){
    tenths++;
    if(tenths <= 9){
        appendTenths.innerHTML = "0" + tenths;
    }

    if(tenths > 9){
        appendTenths.innerHTML = tenths;
    }

    if(tenths > 99){
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tenths = 0;
        appendTenths.innerHTML = "0" + 0;
    }

    if(seconds > 9){
        appendSeconds.innerHTML = seconds;
    }

    if(seconds > 60){
        minutes++;
        appendMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        appendSeconds.innerHTML = "0" + 0;
    }

}
}