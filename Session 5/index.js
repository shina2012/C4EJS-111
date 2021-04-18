// Bài tập ôn tập:
//Bài 1 :
{
let styles = ['Jazz','Blues'];
styles.push('Rock-n-Roll');
console.log(`${styles}`);

let midIndex = Math.ceil(styles.length/2);
console.log(styles[midIndex-1]);
styles[midIndex-1]= 'Classics';
console.log(`${styles}`);

styles.shift();
console.log(`${styles}`);

styles.unshift('Rap','Reggae');
console.log(`${styles}`);
}



//Bài 2:
{
let arr =[1,-2,3,4,-9,6,20,100];
// let maxNumber = Math.max.apply(Math, arr);
// console.log(maxNumber);
// let minNumber = Math.min.apply(Math, arr);
// console.log(minNumber);
arr.sort(Number);
console.log(arr);
arr.reverse();
console.log(arr);

}
//Bài 3:
let myColor = ["Red", "Green", "White", "Black"];
console.log(...myColor);

let user = prompt('Nhập kí tự để nối các giá trị');

console.log(myColor.join(user));




