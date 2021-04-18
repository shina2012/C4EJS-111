let listMovies = ['Batman','Spiderman','Ironman','Superman','Aquaman'];

while(true){
    let userAdmin = prompt('Bạn muốn thực hiện tác vụ nào? C,R,U,D');
    if(userAdmin == 'R'){
        console.log('Danh sách phim:')
        for(let i = 1 ;i< listMovies.length; i++){
             alert('Done');
             console.log(`${i}.${listMovies[i]}`);

        }       
    }else if(userAdmin == 'C'){
        let newMovie =prompt('Nhập vào tên bộ phim mới bạn muốn thêm vào');
        listMovies.push(newMovie);
        alert('Done');
    }else if(userAdmin =='U'){
        let itemUpdate = Number(prompt('Nhập vào vị trí bạn muốn thay đổi'));
        listMovies[itemUpdate] = prompt('Nhập vào tên phim mới');
        alert('Done');
    }
    else if(userAdmin =='D'){
        let userDelete =Number(prompt('Nhập vào vị trí bạn muốn xóa'));
        listMovies.splice(userDelete,1);
        alert('Done');
    }else{
        break;
        
    }
}