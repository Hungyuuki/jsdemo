//filter

var courses = [
    {id: 1, name: 'reactjs', price: 250},
    {id: 2, name: 'nodejs', price: 249},
    {id: 3, name: 'ruby', price: 0},
    {id: 4, name: 'C#', price: 0},
    {id: 5, name: 'php', price: 0},
]


Array.prototype.filter2 = function (callback) {
    var output = [];
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this);
            if (result){
                output.push(this[index])
            }
        }
    }
    return output
}
var filterCourse = courses.filter2(function(course, index, array) {
    console.log(course, index, array)
    // return course.price > 10
})
console.log(filterCourse)