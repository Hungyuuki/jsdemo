var postAPI = "http://localhost:3000/comments"

fetch(postAPI)    //return ra một promise
.then(function(response) {
    return response.json(); //return ra một promise, là một đối tượng response được parse sang json và parse luôn sang định dạng javascript
})
.then(function(comments) {
    console.log(comments)
});
