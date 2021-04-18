// let players = ['Madona','Ronado','Merci'];
// let cauThu = players;
// console.log(cauThu);

// cauThu[0] = 'Shina';
// console.log(players);
// console.log(cauThu);


// String , number =bigint, boolean
//null, undifined, symbol
//Các giá trị nguyên thủy "xuất hiện từ khi bắt đầu khởi tạo js";
// a = b là tham trị


// array , object, funtion => object
// arrA = arrb là tham chiếu.

// let coopy =[];
// for(item of players){
//     coopy.push(players);
// }

// let coppy2 = [...players];
// coppy2[0] = 'Shina';
// console.log(coppy2);

// Object
// let newObject ={
//     name:'Thai',
//     age:32,
//     school:'Tri Duc',
//     title:'Alone',
// };
// console.log(newObject);
// console.log(newObject.age);

// đọc object.property

// Bài tập
// {
// let user = prompt('Bạn muốn in ra thông số nào name, age, school,title ');
// let user = ['name','age'];
// console.log(newObject[user]);

//Kiểm tra 1 giá trị có trong object hay không
// if(!newObject[user]){
//     console.log('Không tồn tại');
// }

// Nếu chưa khai báo newObject
// let newObject;
// if(!newObject && !newObject[user]){
//     console.log('Không tồn tại');
// }
// }
// // Tạo mới property
// newObject.laptop = 'Asus';
// console.log(newObject);


let list = {
    name:'Cristiano Ronaldo',
    age:36,
    from:'Bồ đào nha',
}
// console.log(list['name']) // in ra value 

// let user = prompt('Bạn có muốn nhập thêm thông tin không? Y or N');
// if(user === 'Y'){
//     let userPpt = prompt('Nhập vào tên thuộc tính bạn muốn nhập')
//     let userValue = prompt('Nhập vào giá trị của thuộc tính trên')
//      list[userPpt] =userValue;
//         console.log(list);
// }else{
//     alert('Bye');
// }

// Update : 
// list.age =40;
// console.log(list);
let newList = {};
newList = {...list}; // coppy object không bị tham chiếu .
newList.age =50;
console.log(list);
console.log(newList);

// Delete property trong object: delete object.property xóa property trong object
// delete list.from;

console.log(list);
console.log(newList);

console.log(Object.entries(list)); 

let keys = Object.keys(list); // lấy ra toàn bộ property của object truyền vào và trả ra dưới dạng 1 mảng.
console.log(keys);

let values = Object.values(list);
console.log(values);
// lấy ra toàn bộ value.

//Tìm hiểu destructuring.
