
/**
 * 
 * @param {*} ms 
 * @returns 
 * 1: promise.res
 * 2: promise.rej
 * 3: promise.all
 */

// function todolist(ms) {
//     return new Promise((res) => {
//         setTimeout(res, ms) //res bằng hardcode
//     })
// }


// todolist(1000)
// .then(()=> {//đối tượng todolist.then
//     console.log(1)
//     return todolist(1000)
// })
// .then(()=> {
//     console.log(2);
//     return new Promise((res, rej)=> {
//         rej();//ném ra lỗi ở .then thứ 2 bằng hardcode
//     })
// })
// .then(()=> {
//     console.log(3);
//     return todolist(1000)
// })
// .then(()=> {
//     console.log(4);
//     return todolist(1000)
// })
// .catch((err)=> {
//     console.log('Lỗi, vui lòng nạp cark 20k để tiếp tục')//có lỗi ở đâu thì catch ở đó
// })

// //promise.resolve
// var promise = Promise.resolve('Success')

// promise
// .then((result)=>{
//     console.log('result: ', result)
// })
// .catch((err)=> {
//     console.log('result: ', err)
// })


/**
 * Có một số thư viện quy ước output luôn luôn là một promise
 * nên dù res hay rej thì luôn trả về một promise
 */





//promise.all
var arr1 = new Promise(
    function(resolve) {
    setTimeout(function() {
        resolve([1])
    }, 2000)
})

var arr2 = new Promise(
    function(resolve) {
    setTimeout(function() {
        resolve([2, 3])
    }, 4000)
})

Promise.all([arr1, arr2])//hiển thị song song arr1 và arr2
.then(function(result) {
    // console.log(result)
    var result1 = result[0];
    var result2 = result[1];
    console.log(result1.concat(result2))
})