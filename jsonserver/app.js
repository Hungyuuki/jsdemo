var listCoursesBlock = document.querySelector("#list-courses")
var courseAPI = 'http://localhost:3000/comments'

function start() {
getCourses(function(courses) {
    console.log(courses)
})
}

start();

// functions
function getCourses(callback) {
    fetch(courseAPI).then(function(response) {
        return response.json();
    })
    .then(callback)
}