/**
 * FE: Xây dựng giao diện người dùng.
 * BE: Xây dựng logic + xử lý CSDL.
 * API (URL): Application programing interface: việc giao tiếp giữa 2 phần mềm
 * Cổng giao tiếp giữa các phần mềm.
 * Một PM = PHP bên BE, một PM = JS bên FE, để cho BE mang CSDL có thể giao tiếp với FE,
 * qua một URL.
 * API ở phía BE, BE cấp một URL để đưa ra một cái dữ liệu nào đó, DL đó sẽ nhận được để hiển thị ra ng dùng
 * 
 * BE ->API ->Fetch -> JSON/XML->JSSON.parse ->JS types->render ra giao diện với HTML
 * 
 * 
 * 
 * 
 * fetch là một hàm được dựng sẵn, return ra một promise
 * fetch có thể tạo ra JSON server: tức là có thể fake được 1 thằng BE thêm sửa xóa
 * 
 * 
 */


var postAPI = 'https://jsonplaceholder.typicode.com/albums'

fetch(postAPI)    //return ra một promise
.then(function(response) {
    return response.json(); //return ra một promise, là một đối tượng response được parse sang json và parse luôn sang định dạng javascript
})
.then(function(album) {
    var htmls = album.map(function(album) {//lấy ra một mảng có các trường mà return trường nào thì sẽ có trường đó
        return `<li>
        <h4>${album.title}</h2>
        <p>${album.id}</p>
        </li>`
    })
    var html = htmls.join('') //khai báo một mảng mới có các phần tử cách nhau bởi ''
    document.getElementById('album-block').innerHTML = html
})
.catch(function(err){
    console.log(err)
})