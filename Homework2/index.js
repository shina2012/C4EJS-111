// Bài 1 :
//1.1: var và const đều dùng để khai báo 1 biến,nhưng biến sủa const là hằng số và không thể thay đổi.
//1.2: Những điểm khác nhau giữa let và var là : 
// + Một biến được khai báo bằng var sẽ tồn tại và được sử dụng trong cả workspace.
// + Một biến được khai báo bằng let, nếu ở trong một block (khu vực được giới hạn bởi {}, sẽ chỉ tồn tại và được sử dụng trong phạm vi block đó.
// Vì vậy sử dụng let thay vì var sẽ tránh trường hợp có giá trị trùng tên ở ngoài phạm vi block cần thiết ảnh hưởng đến nhau và dẫn đến bug trong code.
//1.3: Điểm khác nhau giữa let và const:
// + let khai báo 1 biến có thể được cập nhật.
// + const khai báo 1 hằng, giá trị không được cập nhật.
//1.4: 
// + Sử dụng var khi muốn khai báo 1 biến để sử dụng và cập nhật ở toàn cục.
// + Sử dụng let khi muốn khai báo một biến để sử dụng/cập nhật và được giới hạn bởi block mà nó được khai báo bên trong.
// + Sử dụng const khi muốn khai báo một hằng để sử dụng và được giới hạn bởi block mà nó được khai báo bên trong.

// Bài 2 :
//2.1: Boolean là một kiểu dữ liệu chỉ bao gồm 2 giá trị true hoặc false.
//2.2: Những thứ sinh ra kiểu dữ liệu boolean là : Biến boolean ,các phép so sánh > >= < <= === !== ,các thao tác cơ bản với boolean && \\ !, các kiểu dữ liệu khác Số: NaN 0 , Chuỗi: rỗng .

// // Bài 3 :
// //3.1:
{
    console.log('Kết quả bài 3.1');
    for(let i =0 ; i < 7;i++){
         console.log(i);
}
}
// // //3.2:
{
    console.log('Kết quả bài 3.2')
let x =Number(prompt('Nhập vào 1 số cho bài 3.2'));
for(i = 0;i < x; i++){
    console.log(i);
}
}

// // //3.3:
{
    console.log('Kết quả bài 3.3');
    let x = Number(prompt('Nhập vào 1 số cho bài 3.3'));
    for(let i = 3;i < x ; i++){
        console.log(i);
}
}
// //3.4:
{
  console.log('Kết quả bài 3.4');
  let c =Number(prompt('Nhập số bắt đầu cho bài 3.4'));
  let n =Number(prompt('Nhập số kết thúc cho bài 3.4'));
  for(;c<n;c++){
     console.log(c);
}
}

// //3.5:
{
    console.log('Kết quả bài 3.5');
    let c =Number(prompt('Nhập số bắt đầu cho bài 3.5'));
    let n =Number(prompt('Nhập số kết thúc cho bài 3.5'));
    for(;c<n;c+=3){
        console.log(c);
    }
}

// //Bài 3.6:
{
    console.log('Kết quả bài 3.6');
    let c =Number(prompt('Nhập số bắt đầu cho bài 3.6'));
    let n =Number(prompt('Nhập số kết thúc cho bài 3.6'));
    let s =Number(prompt('Nhập bước nhảy cho bài 3.6'));
    for(;c < n;c+=s){
        console.log(c);
    }
}
//Bài 4:
{
let factOfN = 1;
let n = Number(prompt('Nhập vào 1 số cho bài 4'));
for(let i = 1;i < n + 1;++i){
    factOfN *= i;
}    alert(`The factorial of ${n} is ${factOfN}`);
}
//Bài 5:
{
let x =Number(prompt('Bài 6:How old are you?'));
if(x < 14){
    alert('You are not old enough to view this content');
}else{
    alert('Enjoy!');
}
}
//Bài 6:
{
 let x =Number(prompt('Bài 6: Nhập vào 1 số trong khoảng [ từ 0 đến 9 ]'));
 if(x < 4.5){
     alert('Lower half of 9');
 }else{
     alert('Higher half of 9');
}
}

//Bài 7:
{
    let x =Number(prompt('Bài 7: Nhập vào số là độ dài khoảng bạn muốn tính'));
    let y =Number(prompt('Bài 7: Nhập vào số bạn muốn tính trong khoảng trên'));
    if(y < (x/2)){
        alert(`${y} nhỏ hơn một nửa của ${x}`);
    }else if(y > (x/2)){
        alert(`${y} lớn hơn một nửa của ${x}`);
    }else{
        alert(`${y} là một nửa của ${x}`);
    }
}

//Bài 8:
{
    let x =Number(prompt('Bài 8: Nhập vào 1 số bất kì'));
    if(x%2 == 0){
        alert(`${x} là số chẵn`);
    }else{
        alert(`${x} là số lẻ`);
    }
}
 
//Bài 9:
//9.1:
{
    console.log('Kết quả bài 9.1');
    let x = 1;
    let y = 6;
    while(x <= y){
    if(x > (y/2)){
        console.log('H');
    }else{
        console.log('L');
    }x++;
}
}
//9.2:
{
    console.log('Kết quả bài 9.2');
    let i = 1;
    let x =Number(prompt('Bài 9: Nhập vào 1 số bất kì'));
    while(i <= x){
        if(i > (x/2)){
            console.log('H')
        }else{
            console.log('L')
        }i++;
    }
    
}

//9.3:
{
    console.log('Kết quả bài 9.3');
    let i = 1;
    let x = 8;
    while(i <= x){
        if(i%2 == 1){
        console.log(0);
    }else{
        console.log(1);
    }i++;
    }
}
//9.4:
{
console.log('Kết quả bài 9.4');
let i = 1;
let x =Number(prompt('Bài 9.4: Nhập vào số vòng lặp'));
while(i <= x){
    if(i%2 == 1){
        console.log(0);
    }else{
        console.log(1);
    }
    i++;
}

}

//Bài 10:
{
let w =Number(prompt('Your weight in kg?'));

let h =Number(prompt('Your height in cm?'));

let BMI = w / (h * h / 10000);
alert(`Your BMI is ${BMI}`);
if (BMI<16) {
    alert('You are severy underweight');
} else if (BMI<18.5) {
    alert('You are underweight');
} else if (BMI<25) {
    alert('You are normal');
} else if (BMI<30) {
    alert('You are overweight');
} else {
    alert('You are obese');
}
}

//Bài tập thêm : do while là vòng lặp chạy trước rồi mới kiểm tra điều kiện. Lặp tối thiểu 1 lần kể cả điều kiện sai.
console.log('Kết quả bài tập thêm');
{
    let i = 1;
    do{
        console.log(i);
        i++;
    }while(i < 10);
}

alert('Hoàn thành bài tập :))');
