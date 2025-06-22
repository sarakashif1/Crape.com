

const startTiming = 60 * 24;
let time;


const savedTime = localStorage.getItem("countdownTime");
const lastUpdate = localStorage.getItem("countdownLastUpdate");

if (savedTime && lastUpdate) {
    const now = Math.floor(Date.now() / 1000);
    const elapsed = now - parseInt(lastUpdate, 10);
    time = Math.max(0, parseInt(savedTime, 10) - elapsed);
} else {
    time = startTiming * 60;
}


const count = document.querySelector(".Count");

updateTimer();
const timer = setInterval(updateTimer, 1000);

function updateTimer() {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;

    const formattedHours = hours < 10 ? '0' + hours : hours;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    count.innerHTML = `
        <div class="btns">
            <button class="time-button">
                ${formattedHours}
                <div class="time-label">HRS</div>
            </button>

            <span class="sign">:</span>

            <button class="time-button">
                ${formattedMinutes}
                <div class="time-label">MIN</div>
            </button>

            <span class="sign">:</span>

            <button class="time-button">
                ${formattedSeconds}
                <div class="time-label">SEC</div>
            </button>
        </div>`;

    if (time > 0) {
        time--;
        localStorage.setItem("countdownTime", time);
        localStorage.setItem("countdownLastUpdate", Math.floor(Date.now() / 1000));
    } else {
        clearInterval(timer);
    }
}






///////////////
const startTiming2 = 60 * 24; // 24 minutes
let time2;

const savedTime2 = localStorage.getItem("countdownTime");
const lastUpdate2 = localStorage.getItem("countdownLastUpdate");

if (savedTime2 && lastUpdate2) {
    const now = Math.floor(Date.now() / 1000);
    const elapsed = now - parseInt(lastUpdate2, 10);
    time2 = Math.max(0, parseInt(savedTime2, 10) - elapsed);
} else {
    time2 = startTiming2 * 60;
}

const count2 = document.querySelector(".Counter");

updateTimer2();
const timer2 = setInterval(updateTimer2, 1000);

function updateTimer2() {
    const hours = Math.floor(time2 / 3600);
    const minutes = Math.floor((time2 % 3600) / 60);
    const seconds = time2 % 60;

    const formattedHours = hours < 10 ? '0' + hours : hours;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    count2.innerHTML = `
        <div class="timing">
                ${formattedHours}:
                ${formattedMinutes}:
                ${formattedSeconds}
            
        </div>`;

    if (time2 > 0) {
        time2--;
        localStorage.setItem("countdownTime", time2);
        localStorage.setItem("countdownLastUpdate", Math.floor(Date.now() / 1000));
    } else {
        clearInterval(timer2);
    }
}

function restartTimer() {
    time = startTiming * 60;
    localStorage.setItem("countdownTime", time);
    localStorage.setItem("countdownLastUpdate", Math.floor(Date.now() / 1000));
    updateTimer();
}


///////////////////////

const startTiming3 = 60 * 24;
let time3;

const savedTime3 = localStorage.getItem("countdownTime");
const lastUpdate3 = localStorage.getItem("countdownLastUpdate");

if (savedTime3 && lastUpdate3) {
    const now = Math.floor(Date.now() / 1000);
    const elapsed = now - parseInt(lastUpdate3, 10);
    time3 = Math.max(0, parseInt(savedTime3, 10) - elapsed);
} else {
    time3 = startTiming3 * 60;
}

const count3 = document.querySelector(".Counting");

updateTimer3();
const timer3 = setInterval(updateTimer3, 1000);

function updateTimer3() {
    const hours = Math.floor(time3 / 3600);
    const minutes = Math.floor((time3 % 3600) / 60);
    const seconds = time3 % 60;

    const formattedHours = hours < 10 ? '0' + hours : hours;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    count3.innerHTML = `
        <div class="timing">
            ${formattedHours}:${formattedMinutes}:${formattedSeconds}
        </div>`;

    if (time3 > 0) {
        time3--;
        localStorage.setItem("countdownTime", time3);
        localStorage.setItem("countdownLastUpdate", Math.floor(Date.now() / 1000));
    } else {
        clearInterval(timer3);
    }
}

