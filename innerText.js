//lấy ra được nội dung của textNode/sửa đổi nội dung textNode.
var headingElement = document.querySelector('h1');
console.log(headingElement.innerText)
console.log(headingElement.textContent)
// sử dụng thuộc tính innerText để lấy ra chuỗitext của thẻ h1


//phân biệt giữa innerText và textContent:
//innerText trả về chuỗi ta nhìn thấy trên màn hình console, là thuộc tính của elementNode, tức là phải lấy được tên Element thì mới gọi được thuộc tính innerText
//textContent trả về màn hình console chuỗi thật trong DOM, 
//tức là có cả khoảng cách, nó coi toàn bộ những gì trong phần tử
//đó đều chỉ là một textNode
