var interval = 120;
var timeElapsed = interval;
var timerID = -1;
var warningTime = 10;
var onFinish = "continue"

function tick() {
    timeElapsed--;
    document.getElementById("time").innerHTML = timeElapsed;
    if (timeElapsed == warningTime) {
        playAudio("beepsound");
    }
    if (timeElapsed == 0) {
        playAudio("beepsound2");
        if (onFinish=="restart"){
            restart()
        }
    }
}

function start() {
    if (timerID == -1) {
        timerID = setInterval(tick, 1000);
    }
}

function stop() {
    if (timerID != -1) {
        clearInterval(timerID);
        timerID = -1;
    }
}

function reset() {
    stop();
    timeElapsed = Number(interval) + 1;
    tick();
}

function restart() {
    reset();
    start();
}

function playAudio(id) {
    var x = document.getElementById(id);
    x.play();
}

function changeInterval() {
    interval = document.getElementById("intervalDropdown").value;
}

function changeWarningTime() {
    warningTime = Number(document.getElementById("warningTimeDropdown").value);
}

function changeFinishBehavior() {
    onFinish = document.getElementById("behaviorOnFinishDropdown").value;
}

function customButton(newInterval, newWarningTime, newActionOnFinish){
    interval = newInterval;
    document.getElementById("intervalDropdown").value = interval;
    warningTime = newWarningTime;
    document.getElementById("warningTimeDropdown").value = warningTime;
    onFinish = newActionOnFinish;
    document.getElementById("behaviorOnFinishDropdown").value = onFinish;
    restart();
}
