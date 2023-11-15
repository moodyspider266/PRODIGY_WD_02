let [hours, minutes, seconds, milliSeconds] = [0, 0, 0, 0];
let timeRef = document.querySelector(".timer");
let lapList = document.querySelector(".lap-list");
let int = null;
let lapNumber = 1;

document.getElementById("start").addEventListener("click", () => {
    if (int != null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

document.getElementById("pause").addEventListener("click", () => {
    clearInterval(int);
});

document.getElementById("reset").addEventListener("click", () => {
    clearInterval(int);
    [hours, minutes, seconds, milliSeconds] = [0, 0, 0, 0];
    timeRef.innerHTML = "00 : 00 : 00 : 000 ";
    clearLapList();
    lapNumber = 1;
});

document.getElementById("lap").addEventListener("click", () => {
    if (int != null) {
        addLapTime();
    }
});

function addLapTime() {
    let lapTime = timeRef.innerHTML;
    let lapItem = document.createElement("li");
    lapItem.textContent = `Lap ${lapNumber} = ${lapTime}`;
    lapList.appendChild(lapItem);
    lapNumber++;
}

function clearLapList() {
    lapList.innerHTML = "";
}

function displayTimer() {
    milliSeconds += 10;
    if (milliSeconds == 1000) {
        milliSeconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let hh = (hours < 10) ? ("0" + hours) : (hours);
    let mm = (minutes < 10) ? ("0" + minutes) : (minutes);
    let ss = (seconds < 10) ? ("0" + seconds) : (seconds);
    let ms = (milliSeconds < 10) ? ("00" + milliSeconds) : ((milliSeconds < 100) ? ("0" + milliSeconds) : (milliSeconds));

    timeRef.innerHTML = `${hh} : ${mm} : ${ss} : ${ms}`;
}