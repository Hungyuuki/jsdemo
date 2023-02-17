//tương tác của người dùng lên website ví dụ bằng chuột chính là events
//bao gồm cả những hành vi của trình duyệt ngoài chuột, khi trình duyệt hoặc ng dùng có event 
//thì sẽ có bắt sự kiện của event đó và xử lý
/**
 * 1. Attribute events: event bằng thuộc tính
 * 2. Assign event using the element node: gán events và sử dụng element node
 */

var h1element = document.querySelectorAll('h1')
console.log(h1element);
for (var i = 0; i < h1element.length; i++) {
    h1element[i].onclick = (event) => console.log(event.target)
}


