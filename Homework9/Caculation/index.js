let result = "";
let listCurrent = document.getElementById("result");

function addString(textInput) {
    result += textInput;
    listCurrent.innerText = result;
}

function reset() {
    result = "";
    listCurrent.innerText = "0";
}

function resultAll() {
    let followResult = eval(listCurrent.innerText);
    listCurrent.innerHTML = followResult;
}


