//DOM Events
//1. Input/Select : Lấy ra được value của những thẻ input
//2. Keyup/down

var inputTextElement = document.querySelector('input[type="text"]');//query tới attribute
document.onkeyup = function(e) {//document là đối tượng toàn bộ màn hình
    console.log(e.which);
    switch(e.which) {
        case 32: console.log('tắt')
        break;
        case 13: console.log('Enter')
        break;
    }
}

var inputCheckBoxElement = document.querySelector('input[type="checkbox"]');//query tới attribute
inputCheckBoxElement.onchange = (e) => {
    console.log(e.target.checked)
}

var inputSelectElement = document.querySelector('select');//query tới element
inputSelectElement.onchange = (e) => {
    console.log(e.target.value)
}