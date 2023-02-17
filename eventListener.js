/**
 * 1. Even listener: phương pháp khác giúp nghe được sự kiện, giống dom event nhưng tùy bài toán mà sử dụng
 * 
 * 1. Xử lý nhiều việc khi một event xảy ra
 * 2. Lắng nghe/hủy bỏ lắng nghe.
 */


var btn = document.getElementById('btn');


function firstWork() {
    console.log('Việc 1')
};
function secondWork() {
    console.log('Việc 2')
}
btn.addEventListener('click', firstWork);
btn.addEventListener('click', secondWork);

setTimeout(function() {
    btn.removeEventListener('click', firstWork)
}, 3000)

/**
 * Event listeners sẽ được sử dụng khi ta có nhu cầu tùy biến sự kiện nhiều hơn
 * Ví dụ như khi ta muốn remove listener đi như ví dụ trên
 */
