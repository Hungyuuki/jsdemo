//every là hàm trả về true false

Array.prototype.every2 = function(callback) {
    for (var index in this) {
        var output = true;
        if( this.hasOwnProperty(index)){//nếu là thuộc tính thì mới thực hiện
                var result = callback(this[index], index, this)
                if (!result){//nếu có 1 phần tử ko phải true thì
                    output = false; //gán cho output = false
                    break;
                }
            }
        }
        return output;
    }
var courses = [
    {id: 1, name: 'reactjs', price: 250},
    {id: 2, name: 'nodejs', price: 249},
    {id: 3, name: 'ruby', price: 0},
    {id: 4, name: 'C#', price: 0},
    {id: 5, name: 'php', price: 0},
]

var everyCourse = courses.every2(function(course, index, array) {
    // console.log(course, index, array)
    return course.price > 10
})
console.log(everyCourse)