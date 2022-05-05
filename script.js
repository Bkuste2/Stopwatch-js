let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let stopwatch;

const start = () =>{
    stop()
    stopwatch = setInterval(() =>{
        timer();
    },10);
}

const stop = () =>{
    clearInterval(stopwatch)
}

const reset = () =>{
    stop();
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    document.getElementById('counter').innerHTML = hour + ":" + minute + ":" + second + ":" + millisecond;
}

const timer = () =>{
    if(millisecond < 99){
        millisecond++;
    }
    else{
        millisecond = 0;
        second++
        if(second >= 60){
            second = 0;
            minute++;
            if(minute >= 60){
                minute = 0;
                hour++
            }
        }
    }
    document.getElementById('counter').innerHTML = hour + ":" + minute + ":" + second + ":" + millisecond;
}

const press = (e)=>{
    if(e.code === "Space"){
        start()
    }
    if(e.code === "Escape"){
        stop()
    }
    if(e.code === "Delete"){
        reset()
    }
}