let currentTime = document.getElementById('time')

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let stopwatch;


let stringHour = ''
let stringMinute = ''
let stringSecond = ''
let stringMillisecond = ''
const escrever = () => {

    if(minute < 10){
        stringMinute = `0${minute}`
    }
    else{
        stringMinute = minute
    }
    if(hour < 10){
        stringHour = `0${hour}`
    }
    else{
        stringHour = hour
    }
    if(second < 10){
        stringSecond = `0${second}`
    }
    else{
        stringSecond = second
    }
    if(millisecond < 10){
        stringMillisecond = `0${millisecond}`
    }
    else{
        stringMillisecond = millisecond
    }

    if(hour >= 1){
        currentTime.innerHTML = `${stringHour}:${stringMinute}:${stringSecond}`
    }
    else{
        currentTime.innerHTML = `${stringMinute}:${stringSecond}:${stringMillisecond}`
    }


}


let rodando = false;

const start = () => {
    if(rodando == false){
        document.querySelector('.circle').style.animation = 'animateCircle 0.5s linear infinite'
        stopwatch = setInterval(() => {
            incrementTime();
        }, 10)
        rodando = true
    }
    else{
        stop()
        rodando = false
    }
}

const stop = () => {
    clearInterval(stopwatch)
    document.querySelector('.circle').style.animation = 'stop'
}

const reset = () => {
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;

    escrever()
    stop()

    document.querySelector('.circle').style.animation = 'none'
    rodando = false
}

const incrementTime = () =>{
    millisecond++
    if(millisecond >= 100){
        second++
        millisecond = 0;
    }
    if(second >= 60){
        minute++
        second = 0;
    }
    if(minute >= 60){
        hour++
        minute = 0;
    }
    escrever()
}