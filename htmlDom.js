//HTML DOM
/**
 * 1. Element: id, class, tagName, CSS selector, html colection
 * 2. Attribute
 * 3. Text
 * ---------------------------------------------
 * Javascript: cung cấp phương tiện để truy cập vào htmlDom
 * =>htmlDom ko phải của js, chạy ở Browser, Server(Nodejs)
 * 
 * Browser: html -> dom -> cần dom api để truy cập vào dom
 */
// var cssSelector = document.querySelector('html .box .heading-2')
// console.log(cssSelector)

// var cssSelectors = document.querySelectorAll('.box .heading-2')
// console.log(cssSelectors[2])

console.log(document.images)//lọc thẻ a có tất cả các thuộc tính là name
//tức là riêng đối với form thì ko cần getElementsByID mà chỉ cần 
//truyền vào vị trí
