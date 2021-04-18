// let templateString = "   Holle   ";
// console.log(templateString.trim());
// cắt bỏ khoảng trắng ở hai đầu 
// console.log(templateString.substring(0,4));
//Cắt chuỗi từ vị trí đầu đến vị trí index cuối chỉ định;

// let x  = prompt("Bạn tên là gì? ");
// alert(x);
// alert(`myname:" ${x} ",What do you want?`);


//boolean là kiểu dữ liệu trả về giá trị đúng hoặc sai;
//null được trả về khi gọi biến chưa được khai báo giá trị

// //* phép so sách
// let x = 3;
// console.log(x);
// console.log(x == 3);  // không cần cùng kiểu dữ liệu vẫn so sánh
// console.log(x === "3"); // cùng kiểu dữ liệu mới so sách

// || : hoặc
// && : và



// let x =prompt("nhập tên bạn :");
// if( x.length > 5){
//     console.log("tên bạn dài hơn 5 kí tự");

// }else{
//     console.log("tên bạn ngắn thế =))))");

// }


// let x =Number(prompt(" nhập vào số thứ 1: "));
// let y =Number(prompt(" nhập vào số thứ 2: "));
// let z =prompt(" nhập phép tính bạn muốn làm");
// if(z === "/" && y ===0){
//     console.log("Lỗi phép tính")
// }
// else if(z === "+"){
//       console.log(x+y);
// }else if(z ==="-"){
//    console.log(x-y);
// }else if(z ==="*"){
//     console.log(x * y);
// }else{
//     console.log(x / y);
// }


//   console.log(i);
// for(i= 1; i< 101;i+=2){
//     // if(i%2==0){
//     //     console.log(i)
//     // }
//     console.log(i);
// }
// {
// let x ="100";// không trả giá trị nếu là số( chỉ dùng với chuỗi ; array ;object);
// for(let i =0 ; i<x.length;i++){
//     console.log(i);x
// }}


{
let x =Number( prompt("nhập vào 1 số bất kì:"));
for(i= 0; i <= x ;i++){
    console.log(i);
}
}
{
let i =0;
while(i<=100){
    i++;
console.log(i);
}
}
{
let i = 0;  //hủy vòng lặp với break
while(i<=100 ){
    i++;
   if(i%2 ===0){
       console.log(i);
       break;
        }}
}

{
    let i = 0;
    while(i<=100){
    if(i%2===0){
        console.log(i);
        break;
    }
    i++
    }
}

// Tìm hiểu về vòng lặp (do while);
//Vòng lặp do-while trong JavaScript được sử dụng để lặp một phần của chương trình một vài lần. 
//Tương tự như vòng lặp while, ngoại trừ do-while thực hiện lệnh ít nhất một lần ngay cả khi điều kiện là False
//Nghĩa là thực hiện trước sau đó mới kiểm tra điều kiện.

//Vòng lặp while kiểm tra trước rồi mới chạy
//Vòng lặp do while : chạy trước rồi mới kiểm tra.