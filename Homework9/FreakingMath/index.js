let score = 0;
let level = 1;
let time = 10;
let fullTime = 10;
let widthTime = 0;
function startGame() {
    time = fullTime;
    widthTime = document.getElementById("time").offsetWidth;
    document.getElementById("score").innerHTML = "Score: " + score;
    document.getElementById("level").innerHTML = "Level: " + level;
    generateCalculation();
    countDown();
}
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomOperator() {
    let operators = ["+", "-", "*"];
    let ran = Math.floor(Math.random() * operators.length);
    return operators[ran];
}

function generateCalculation() {
    let number1 = getRandomNumber(1 * level, 5 * level);
    let number2 = getRandomNumber(1 * level, 5 * level);
    let op = getRandomOperator();
    let cal = number1 + " " + op + " " + number2;
    if (level >= 10) {
        cal = number1 + " " + op + " " + number2 + getRandomOperator() + " " + getRandomNumber(2, 10);
    }
    document.getElementById("calculation").innerHTML = cal;
    document.getElementById("result").innerHTML = getRandomResult(cal);
}

function getRandomResult() {
    let randomResult = Math.random() >= 0.3;
    return randomResult ? getResult() : getFakeResult();
}

function getResult() {
    let cal = document.getElementById("calculation").innerHTML;
    return eval(cal);
}

function getFakeResult() {
    let fakeResult = getRandomNumber(getResult() - getRandomNumber(2, 20), getResult() + getRandomNumber(2, 20));
    return (fakeResult === getResult()) ? getFakeResult() : fakeResult;
}
function countDown() {
    let timeDiv = document.getElementById("time");
    let run = setInterval(function () {
        time -= 0.1;
        timeDiv.style.width = widthTime * time / fullTime + "px";
        if (time <= 0) {
            clearInterval(run);
            gameOver();
        }
    }, 100);
}
function check(btn) {
    let result = +document.getElementById("result").innerHTML;
    let check = false;
    switch (btn) {
        case "true":
            if (result == getResult()) check = true;
            break;
        case "false":
            if (result !== getResult()) check = true;
            break;
    }

    check ? nextLevel() : gameOver();
}
function nextLevel() {
    score += level;
    level++;
    time = fullTime;
    document.getElementById("score").innerHTML = "Score: " + score;
    document.getElementById("level").innerHTML = "Level: " + level;
    generateCalculation();
}
function gameOver() {
    document.getElementById("true").style.display = "none";
    document.getElementById("false").style.display = "none";
    alert("Game Over. Your score is " + score + ". Replay?");
    location.reload();
}

// startGame();