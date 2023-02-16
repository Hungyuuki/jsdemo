var headingElement = document.querySelector('h1');
headingElement.title = 'title test'
console.log(headingElement.title)//title là thuộc tính hợp lệ của thẻ h1

/**
 * get/setAtribute có thể thay đổi/lấy ra các thuộc tính ko hợp lệ của element đó
 * cho nên trong thực tế ta hay sử dụng cách này hơn
 */