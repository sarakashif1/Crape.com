const startTiming = 60 * 24; // 24 minutes in seconds
const startSeconds = startTiming * 60;

// ---- Timer 1 ----
let time1 = getTimeFromStorage("1");
const count1 = document.querySelector(".Count");
updateTimer1();
const timer1 = setInterval(updateTimer1, 1000);

// ---- Timer 2 ----
let time2 = getTimeFromStorage("2");
const count2 = document.querySelector(".Counter");
updateTimer2();
const timer2 = setInterval(updateTimer2, 1000);

// ---- Timer 3 ----
let time3 = getTimeFromStorage("3");
const count3 = document.querySelector(".Counting");
updateTimer3();
const timer3 = setInterval(updateTimer3, 1000);

// ---- Helper Functions ----
function getTimeFromStorage(id) {
    const savedTime = localStorage.getItem(`countdownTime${id}`);
    const lastUpdate = localStorage.getItem(`countdownLastUpdate${id}`);
    if (savedTime && lastUpdate) {
        const now = Math.floor(Date.now() / 1000);
        const elapsed = now - parseInt(lastUpdate, 10);
        return Math.max(0, parseInt(savedTime, 10) - elapsed);
    }
    return startSeconds;
}

function formatTime(t) {
    const hours = Math.floor(t / 3600);
    const minutes = Math.floor((t % 3600) / 60);
    const seconds = t % 60;
    return {
        h: hours < 10 ? '0' + hours : hours,
        m: minutes < 10 ? '0' + minutes : minutes,
        s: seconds < 10 ? '0' + seconds : seconds
    };
}

function checkAndRestartAll() {
    if (time1 === 0 && time2 === 0 && time3 === 0) {
        restartAllTimers();
    }
}

function restartAllTimers() {
    const now = Math.floor(Date.now() / 1000);
    time1 = time2 = time3 = startSeconds;

    localStorage.setItem("countdownTime1", time1);
    localStorage.setItem("countdownLastUpdate1", now);

    localStorage.setItem("countdownTime2", time2);
    localStorage.setItem("countdownLastUpdate2", now);

    localStorage.setItem("countdownTime3", time3);
    localStorage.setItem("countdownLastUpdate3", now);
    
    location.reload();
}

// ---- Timer 1 Update ----
function updateTimer1() {
    const { h, m, s } = formatTime(time1);
    count1.innerHTML = `
        <div class="btns">
            <button class="time-button">${h}<div class="time-label">HRS</div></button>
            <span class="sign">:</span>
            <button class="time-button">${m}<div class="time-label">MIN</div></button>
            <span class="sign">:</span>
            <button class="time-button">${s}<div class="time-label">SEC</div></button>
        </div>
    `;

    if (time1 > 0) {
        time1--;
        localStorage.setItem("countdownTime1", time1);
        localStorage.setItem("countdownLastUpdate1", Math.floor(Date.now() / 1000));
    } else {
        clearInterval(timer1);
        checkAndRestartAll();
    }
}

// ---- Timer 2 Update ----
function updateTimer2() {
    const { h, m, s } = formatTime(time2);
    count2.innerHTML = `<div class="timing">${h}:${m}:${s}</div>`;

    if (time2 > 0) {
        time2--;
        localStorage.setItem("countdownTime2", time2);
        localStorage.setItem("countdownLastUpdate2", Math.floor(Date.now() / 1000));
    } else {
        clearInterval(timer2);
        checkAndRestartAll();
    }
}

// ---- Timer 3 Update ----
function updateTimer3() {
    const { h, m, s } = formatTime(time3);
    count3.innerHTML = `<div class="timing">${h}:${m}:${s}</div>`;

    if (time3 > 0) {
        time3--;
        localStorage.setItem("countdownTime3", time3);
        localStorage.setItem("countdownLastUpdate3", Math.floor(Date.now() / 1000));
    } else {
        clearInterval(timer3);
        checkAndRestartAll();
    }
}
