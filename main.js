//Làm việc với mảng 2:
/**
 * Array methods:
 * forEach(): duyệt mảng 
 * every(): kiểm tra các phần tử cùng 1 mảng thỏa mãn điều kiện gì đó, trả về kiểu boolean, nếu có 1 phần tử false thì trả về false rồi dừng
 * some(): ngược lại với every() là chỉ 1 phần tử true thì sẽ trả về true rồi dừng
 * find(): tìm kiếm và trả về 1 phần tử
 * filter(): tìm kiếm và trả về nhiều phần tử giống nhau và cho vào cùng 1 mảng
 * map(): chỉ nhận đối số là một function, hàm map lặp qua từng phần tử, nó gọi lại 1 function được truyền vào hàm map để thay đổi từng phần tử trong mảng,
 * hay được ứng dụng trong việc trả về một mảng mới với việc thay đổi các phần tử bên trong
 * reduce(): Một phương thức có sẵn dùng để thực thi một hàm nào đó(tùy thuộc vào việc return ra cái gì, thường là phép cộng), điểm đặc biệt ở đây là 
 * nó sẽ sử dụng một biến để tích trữ cộng dồn value của cấc phần tử.
 */
var courses = [
    {id: 1, name: 'reactjs', price: 250},
    {id: 2, name: 'nodejs', price: 249},
    {id: 3, name: 'ruby', price: 0},
    {id: 4, name: 'C#', price: 0},
    {id: 5, name: 'php', price: 0},
]
courses.forEach(function(course) {
    console.log(course)
});
var isFree = courses.every(function(course) {
    return course.price === 0
    //kiểm tra duyệt xem có price nào = 0 không, dòng này là một biểu thức điều kiện,
    //kiểm tra phần tử đầu tiên, nếu điều kiện true thì nhảy sang phần tử 2
});
console.log(isFree)//false

var isFree = courses.some(function(course) {
    return course.price === 0
});
console.log(isFree)//true

var list = courses.find(function(course) {
    return course.name === 'php'
});
console.log(list)//{id: 2, name: 'php', price: 0}
var list2 = courses.filter(function(course) {
    return course.name === 'php'
});
console.log(list2)//{id: 2, name: 'php', price: 0}


var courseHandler = function (course, index){
    return {
        // id: course.id,
        name: `<h2>Khóa học: ${course.name}</h2>`
    //     price: course.price,
    //     coinText: `Giá khóa học là: ${course.price}`,
    //     index: index,
    }               
    //function này return cái gì thì hàm map sẽ trả về một mảng chứa những cái đã được return đó
    //=>return ra cái mà người dùng muốn ở trên view
}
var newCourses = courses.map(courseHandler);
console.log(newCourses)


//Dùng vòng lặp để tính tổng giá khóa học
var totalCoin = 0;
for (var course of courses) {
    totalCoin += course.price;
    console.log(totalCoin);
}
/**
 * Nhưng bản chất các phương thức bên trên đều là các vòng lặp, nhưng được tóm gọn lại 
 * và sẽ được thực thi nhanh hơn, vì ko cần tạo biến cờ(61), ko cần gán đi gán lại(63) 
 * mà chỉ cần nhận giá trị cuối của vòng lặp, tuy nhiên hiệu năng ko nhanh bằng vòng lặp
 * đơn thuần, vì bản chất các hàm trên đều cần gọi lại function và lặp lại, so với việc
 * chỉ việc lặp lại đơn thuần.
 */


//Cách 1:
// var i = 0;
function coinHandler(accumulator, currentValue, currentIndex, originArray) {
    // i++;
    var total = accumulator + currentValue.price;
    console.table({
        'Biến tích trữ hay còn gọi là value: ':accumulator,
        'price: ': currentValue.price,
        'tích trữ được: ': total
    });
    return total;
}
var totalCoin = courses.reduce(coinHandler, 0)
//nạp initial value = 0, hàm reduce sẽ tự return ra số cuối cùng của totalCoin
console.log(totalCoin+"$");



//Cách 2 ngắn hơn vì dùng hàm mũi tên:
var totalCoin = courses.reduce((accumulator, currentValue) =>   
    accumulator + currentValue.price , 0);
//nạp initial value = 0, hàm reduce sẽ tự return ra số cuối cùng của totalCoin
console.log(totalCoin+"$")


//ví dụ về cộng tổng các phần tử của mảng
// const numbers = [1,2, 3, 4, 5]
// const result = numbers.reduce((total, number) => {return total + number}, 0)
// console.log(result);

//định nghĩa một phương thức reduce riêng bằng constructor function của array
Array.prototype.reduce2 = function (callback, result) {
    let i = 0;
    if(arguments.length < 2) {
        i = 1;
        result = this[0];
    }
    for (; i < this.length; i++) {//this là array được sinh ra từ constructor của lớp Array.
        result = callback(result, this[i], i, this)
    }
    return result;
}
const numbers2 = [9, 8, 7, 6, 5]
const result2 = numbers2.reduce2((total, number, index, array) => {
    console.log(total, number, index, array);
    return total + number}, 0)
console.log(result2);
