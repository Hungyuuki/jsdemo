/*
* 2. JSON
*
* Json là định dạng dữ liệu chuỗi
*/
//Mã hóa / giải mã json
//encode / decode
//parse: chuyển từ json sang JS types

var json = '["JS", "Java", "Ruby"]';
//'' là định dạng phân biệt json, các phần tử trong array 
//được biểu diễn bằng dấu "" và được phân cách bằng dấu phẩy.

var obj = '{"key":"value", "name":"Android"}'; //object
var a = 'null';
var obj1 = JSON.parse(obj)//biến obj thành json
console.log(obj1)
console.log(JSON.stringify(obj1))//biến json thành chuỗi

console.log(JSON.stringify({//chuỗi hóa đối tượng sau
    name: 'Dragon Ball',
    age: 16,
    test: function() {}//ko thể hiện ra kết quả
}))