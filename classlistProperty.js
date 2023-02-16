//classlistProperty

//add: thêm class vào element
//contains: kiểm tra class có thuộc element ko
//remove: xóa class khỏi element
//toggle: nếu đang có class, gọi toggle thì sẽ xóa class đó, 
//nếu ko có thì sẽ thêm vào(vừa là add vừa là remove)

var element = document.querySelector('.box')
element.classList.add('red', 'white')
//thêm class red vào đối tượng element
console.log(element.classList.contains('red'))

setInterval(() => {
   element.classList.toggle('red')
}, 500)
