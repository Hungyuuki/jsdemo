//forEach, find, filter, some, every, reduce:
//forEach

Array.prototype.forEach2 = function(callback){
    for (var index in this) {
        if( this.hasOwnProperty(index)){//nếu là thuộc tính thì mới thực hiện
            console.log(index)
            callback(this[index], index, this)
        }
    }
}
var courses = [//arr này được khởi tạo từ chính array constructor dòng số 4
//thừa hưởng luôn method forEach2 mới được định nghĩa
    'reactjs',
    'nodejs',
    'ruby',
    'C#',
    'php'
];
console.log(courses)
courses.length = 1000;
courses.push('JS', 'Ruby')
var output = courses.forEach2(function(course, index, array) {
    console.log(course, index, array)
})
// console.log(output)
//=>forEach sẽ tạo ra vòng lặp để duyệt qua phần tử, 
//có bao nhiêu phần tử thì duyệt qua bây nhiêu chứ
//ko duyệt qua toàn bộ length, ko cần biết length.