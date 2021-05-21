// Bài A phần 1:
let n;
let findNumber;
let inputNumber;
function takeUserInput() {
    n = Number(document.getElementById('point-input').value);
    inputNumber = Number(document.getElementById('number-input').value);
    document.getElementById('n-value').textContent = `Currently, ${n} numbers are on the circle`;
    findOppositeNumber(n, inputNumber);
}
function findOppositeNumber(n, inputNumber) {
    if (n % 2 == 0 && n >= 4 && n <= 20) {
        if ((inputNumber + (n / 2)) <= (n - 1)) {
            findNumber = inputNumber + (n / 2);
        } else {
            findNumber = inputNumber + (n / 2) - n;
        }
        document.getElementById('return-field').textContent = `The opposite number to ${inputNumber} is ${findNumber}`;
    } else {
        document.getElementById('return-field').textContent = `There isn't a number opposite to ${inputNumber}`;
    }
} console.log(findNumber);

let s1;
let s2;
function merge2String(s1, s2) {
    let mergedStr;
    let mergedStrArr = [];
    s1Arr = s1.split("");
    s2Arr = s2.split("");
    console.log(s1Arr);
    console.log(s2Arr);
    if (s1Arr.length >= s2Arr.length) {
        {
            for (i = 0; i < s2Arr.length; i++) {
                mergedStrArr.push(s1Arr[i]);
                mergedStrArr.push(s2Arr[i]);
            }
        }
        {
            for (i = s2Arr.length; i < s1Arr.length; i++) {
                mergedStrArr.push(s1Arr[i]);
            }
        }
    } else {
        {
            for (i = 0; i < s1Arr.length; i++) {
                mergedStrArr.push(s1Arr[i]);
                mergedStrArr.push(s2Arr[i]);
            }
        }
        {
            for (i = s1Arr.length; i < s2Arr.length; i++) {
                mergedStrArr.push(s2Arr[i]);
            }
        }
    }
    mergedStr = mergedStrArr.join("");
    document.getElementById('return-field2').textContent = mergedStr;
}
function takeUserInput2() {
    s1 = document.getElementById('input1').value;
    s2 = document.getElementById('input2').value;
    merge2String(s1, s2);
}