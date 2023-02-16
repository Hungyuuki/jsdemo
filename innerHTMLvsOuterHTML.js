//innerHTML: thêm cả element chứ ko chỉ thêm text vào bên trong một element cho trước


var boxElement = document.querySelector('.box')
//boxElement.innerHTML = '<h1 style="margin: 4px">This is Heading</h1>'
//thêm/set cả một elementNode h1 này vào boxElement
boxElement.outerHTML = '<span>Test</span>'
console.log(boxElement)

//outerHTML: set/ghi đè cả chính element đang được query đó


