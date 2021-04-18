{
    //Bài 1: Phương pháp hoán đổi biến 
    let x = 2;
    let y = 5;
    [x, y] = [y, x];
    console.log(x, y);

}
{
    //Bài 2:Chuyển 1 string sang array:
    let x = 'Hello beauty there';
    let y = Array(x);
    console.log(y);

    let s = "Hello beauty there";
    let a = s.split(' ');
    console.log(a);

}
{
    //Bài 3:dùng dấu ... để in array dạng string;
    let x = [4, 5, 7, -8];
    console.log(...x);
}

{
    //Bài 4: 
    let menus = [' ', 'Jeans', 'T-Shirt', 'Socks'];

    while (true) {
        let nguoiDung = prompt('Hi admin, what do you want (C, R, U, D)?');
        nguoiDung = nguoiDung.toUpperCase();

        if (nguoiDung == 'R') {
            console.log('The curren items are:');
            for (let i = 1; i < menus.length; i++) {
                console.log(`${i}.${menus[i]}`);
            }
        }
        else if (nguoiDung == 'C') {
            let newItem = prompt('Enter the name of the new item');
            menus.push(newItem);
            alert('Done');
        }
        else if (nguoiDung == 'U') {
            let itemUp = Number(prompt('Enter the position you want to update:'));
            itemUp;
            menus[itemUp] = prompt('Enter the new name');
            alert('Done');

        }
        else if (nguoiDung == 'D') {
            let xoaLen = Number(prompt('Enter the position you want to delete'));
            menus.splice(xoaLen, 1);
            alert('Done');

        }
        else {
            alert('This command is not support');
            break;
        }
    }
}

{
    //Bài 5:
    let x = 0;
    let y = [];
    let z = prompt('Nhập vào dãy số, tách nhau bằng dấu  \",\" ');
    y = z.split(',');
    for (let i = 0; i < y.length; i++) {
        x += Number(y[i])
    }
    alert(`Tổng của chúng là :${x}`);

}

{
    //Bài 6:
    let minNumber;
    let newArray = [];
    let daySo = prompt('Nhập một dãy số, tách nhau bằng dấu \",\" ');
    newArray = daySo.split(',');
    minNumber = 0
    for (let i = 1; i < newArray.length; i++) {
        if (newArray[i] < newArray[minNumber]) {
            minNumber = i;
        }
    }
    alert(`Số nhỏ nhất là: ${newArray[minNumber]}`);

}

{
    //Bài 7:
    const arra = [3, 4, 6, -9, 10, 22, 99];
    let timSo = Number(prompt('Enter a number'));
    let isFound = 0;
    for (i = 0; i <= arra.length; i++) {
        if (timSo == arra[i]) {
            alert(`${timSo} Có trong dãy số ,ở vị trí index: ${i}`);
            isFound = 1;
            break;
        }
        if (isFound = 0) {
            alert(`${timSo} Không có trong day số`);

        }
    }
}

{
    //Bài 8:
    // 1.
    let myArr = [10, 21, 52, 200, 90, 164];
    console.log('Xin chào, đây là trọng lượng các con cừu của tôi');
    console.log(...myArr);
    //2.
    let kgMax = Math.max(...myArr);
    console.log('Con lớn nhất trong đàn là:' + kgMax + ' ,hãy cắt lông nó');
    //3.
    let baseSize = myArr.indexOf(kgMax);
    myArr[baseSize] = 8;
    console.log('Sau khi cắt lông , đây là đàn cừu của tôi');
    console.log(...myArr);

    //4.5
    let numberMonth = 4
    for (let i = 0; i < numberMonth; i++) {
        console.log(`\nMONTH:${i + 1}`);
        console.log('Sau 1 tháng thì trọng lượng của đàn cừu bây giờ là :');
        for (let i = 0; i < myArr.length; i++) {
            myArr[i] = Number(myArr[i]) + 50;
        } console.log(...myArr);

        let kgMax = Math.max(...myArr);
        console.log('Con lớn nhất trong đàn là:' + kgMax + ' ,hãy cắt lông nó');
        let baseSize = myArr.indexOf(kgMax);
        myArr[baseSize] = 8;
        console.log('Sau khi cắt lông , đây là đàn cừu của tôi');
        console.log(...myArr);
    }
    //6.
    let long$ = 0;
    let gia$ = 2;
    for (let i = 0; i < myArr.length; i++) {
        long$ += myArr[i];
    }
    console.log(`\n Tổng khối lượng lông nhận được là:${long$}`)
    console.log(` Tôi bán được:${long$} * ${gia$} = ${long$ * gia$}`);


}

{
    //Bài 10:
    console.log('Kết quả bài 10');
    let names = prompt('Enter a sequense of names, separated by commas \",\" ');
    let nArra = names.split(',');
    let map1 = nArra.map(x => `<${x}>`);
    alert(`${nArra} => ${map1}`);
}

{
    //Bài 11:
    let daySo = prompt('Enter a sequence number');
    let array1 = daySo.split(',');
    let temparray1 = [];

    for (i = 0; i < daySo.length; i++) {
        let soLe = Number(array1[i])
        if (soLe & 1) {
            temparray1.push(soLe);
        }
    }
    let result = array1.filter(x => Number(x) % 2 != 0);
    alert(`${array1} => ${result}`);

}

{
    //Bài tập thêm:
    //Cách sao chép mảng:
    //Cách 1:
    console.log('Cách 1')
    let x = ['Vinataba', 'Malboro', 'Thăng Long', 'Kent'];
    console.log(x);
    let y = x.slice();
    console.log(y);

    {
        //Cách 2 :
        console.log('Cách 2:')
        let x = ['Vinataba', 'Malboro', 'Thăng Long', 'Kent'];
        console.log(x);
        let y = x.concat();
        console.log(y);
    }
    {
        //Cách 3:
        console.log('Cách 3:')
        let x = ['Vinataba', 'Malboro', 'Thăng Long', 'Kent'];
        let y = Array.from(x);
        console.log(y);
    }
}

