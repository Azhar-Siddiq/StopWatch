var minutes = document.getElementById('min');
var seconds = document.getElementById('sec');
var miliSeconds = document.getElementById('m-sec');
var showBtn = document.querySelector('.showBtn');
var hideBtn = document.querySelector('.hideBtn');

var min = 0;
var sec = 0;
var msec = 0;

var interval;


function timer(){
    msec++
    miliSeconds.innerHTML = msec;
    if(msec >= 100){
        sec++;
        seconds.innerHTML = sec;
        msec = 0;
    }else if(sec >= 60){
        min++;
        minutes.innerHTML = min;
        sec = 0;
    }
    if(msec <= 9){
        miliSeconds.innerHTML = "0" + msec
    }else if(sec <= 9){
        seconds.innerHTML = "0" + sec
    }
}
function startTimer(){
    interval = setInterval(timer, 10);
    showBtn.style.display = "none";
    hideBtn.style.display = "block";
}
function stopTimer(){
    clearInterval(interval);
    showBtn.style.display = "block";
    hideBtn.style.display = "none";
}
function resetTimer(){
    clearInterval(interval);
    min = 00;
    sec = 00;
    msec = 00;
    minutes.innerHTML = "00"
    seconds.innerHTML = "00"
    miliSeconds.innerHTML = "00"
    showBtn.style.display = "block";
    hideBtn.style.display = "none";
}