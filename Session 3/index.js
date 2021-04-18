// for(let i =0 ; i< 10 ;i++){
//    if(i===6){
//        continue;
//    }
//    console.log(i);
// }
// Đến 6 thì bỏ qua .

// let x =['a','b','c','d','e','g','f'];
// console.log(x);
// console.log(x.length);

// let array = new Array(10);   // Khai báo số phần tử trong mảng - số index
// console.log(array);

// let arrayWithValue = new Array("x","y","z");
// console.log(arrayWithValue)
// OOP hướng đối tượng
//Cách 1:
// {
//     let x = ['do', 're', 'mi', 'fa', 'son', 'la', 'si', 'dô', 'se', 'to', 'de'];
//     for (let i = 0; i < x.length; i++) {
//         if (i % 4 === 0) {
//             continue;
//         } else {
//             console.log(x[i].toUpperCase());
//         }

//     }
// }
// //Cách 2: dùng continue.
// {
//     let x = ['do', 're', 'mi', 'fa', 'son', 'la', 'si', 'dô', 'se', 'to', 'de'];
//     for (let i = 0; i < x.length; i++) {
//         if (i % 4 !== 0) {
//             console.log(x[i].toUpperCase());

//         }
//     }
// }



// {
//  //Bài 3:
//     console.log('Bài 3')
//     let x = ['do', 're', 'mi', 'fa', 'son', 'la', 'si', 'dô', 'se', 'to', 'de'];
//     let y = prompt("Bạn muốn in ra không? Y or N");

//     if (y === "Y") {
//         let z = prompt('Nhập vào giá trị bạn muốn in ra');
//         for (let i = 0; i < x.length; i++) {
//             console.log(x[i]);
//             if (x[i] === z) {
//                 console.log(x[i]);
//             }
//         }
//     }
//     else if (y === "N") {
//         console.log('Bye');
//     }
// }
// {  
// let x = ['do', 're', 'mi', 'fa', 'son', 'la', 'si', 'dô', 'se', 'to', 'de'];
// console.table(x);
// }



// {
// let x = ['do', 're', 'mi', 'fa', 'son', 'la', 'si', 'dô', 'se', 'to', 'de'];
// let last = x.length;
// x[last] = 'oh no';
// console.table(x);
// }

// {
// let x = ['do', 're', 'mi', 'fa', 'son', 'la', 'si', 'dô', 'se', 'to', 'de'];
// for(index in x){
//     console.log(x[index]);
// }

// }
// {
//     let x = ['do', 're', 'mi', 'fa', 'son', 'la', 'si', 'dô', 'se', 'to', 'de'];

// for(value of x){
//     console.log(`'for of' ${value}`);
// }
// }

// {
//     let x = ['Madona','Ronado','Merci'];
//     let x2 =[];
//     for(let i =0; i<x.length;i++){
//         x2[i] = x[i].toLowerCase();
//         console.log(x2[i]);
//     }
// }
// {
//     let players = ['Merci', 'Ronaldo', 'Neymar'];
//     let player = prompt('Bạn muốn đổi tên cầu thủ nào?');
//     let newPlayer = prompt('Nhập tên cầu thủ mới');

// players.pop(); // xóa phần tử cuối cùng
// players.shift(); // xóa phần tử đầu tiên
// players.unshift('shina'); // thêm vào 1 phần tử ở đầu


//     for (let i = 0; i < players.length; i++) {
//           if (player == players[i]) {
//               players[i] = newPlayer;
            
//         }
//     }
//     console.log(newPlayer);
//     console.table(players);
// }
// let players = ['Madona','Ronado','Merci'];
// let numbers = [1,2,3,4,43,22,11];
// numbers.sort();
// console.log(numbers); // sort là sắp xếp mảng
// numbers.reverse(); // đảo ngược

// console.log(players.includes('Ronado'));// kiểm tra phần tử có trong mảng không

// to String là đưa mảng về thành chuỗi 
// Join là nối mảng 
// console.log(players.toString());

// console.log(players.join('+')); // nối các phần tử bằng kí tự nối mới

// bài tập về nhà coppy 1 mảng thứ nhất sang mảng thứ 2.

//Tìm hiểu tham chiếu và tham trị.
let players = ['Madona','Ronado','Merci'];
let cauThu = players;
console.log(cauThu);

cauThu[0] = 'Shina';
console.log(players);
console.log(cauThu);

//Tìm hiểu cách coppy 1 mảng
// coppy xong nhưng khong thay đổi phần tử của Players khi cauThu thay đổi 

