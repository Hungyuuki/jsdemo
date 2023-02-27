var users = [
    {
        id: 1,
        name: "Bàn là sắt"
    },
    {
        id: 2,
        name: "Captor American"
    },
    {
        id: 3,
        name: "Thỏ"
    },
    {
        id: 4,
        name: "Hulk"
    }
    // ...
]
var comments = [    
    {
        id: 1,
        user_id: 1,
        content: "I love you 3k"
    },
    {
        id: 2,
        user_id: 2,
        content: "I can do this all day"
    },
    {
        id: 3,
        user_id: 3,
        content: "Bring me Thanos"
    }
]

/**
 * Hiển thị ra tên user và user comment tương ứng với từng user
 * => Cần BE cung cấp 2 API để lấy ra user và lấy ra comment
 * B1. Gọi API lấy comment.
 * B2. Từ cmts lấy ra user_id, rồi từ user_id lấy ra user tương ứng.
 * Nhưng để lấy được ra những cmts và users thì ta sẽ fake API
 */

//Fake API
/**
 * 
 * @returns Tạo một function trả về một promise là một list comments
 */
function getComments() {//API lấy ra comment
    return new Promise(function(res) {
        setTimeout(() => {
            res(comments)//return về đối tựng comments
        }, 2000)
    })
}


//Tạo một function trả về một promise là một list user
function getUsersByIDs(userIDs) {
    return new Promise(function(res) {
        var result = users.filter((user) => userIDs.includes(user.id));
        setTimeout(() => {
           res(result) 
        }, 2000)
    }, 2000)
}


// Rồi từ comment đó, lấy ra id của từng comment
getComments()
.then(function(comments) {
    var userIDs = comments.map(function(comment) {
        return comment.user_id//lấy được user_id
    })
    return getUsersByIDs(userIDs).then(function(users) { 
    return {
        users: users,
        comments: comments
    }
    }) //truyền user_id đó vào hàm get... để lấy ra user ứng với từng id đó
})
.then(function(data) {
    var commentBlock = document.getElementById('comment-block');
    var htmlRender = ''
    data.comments.forEach(comment => {
        var user = data.users.find(function(user) {
            return user.id === comment.user_id;
        })
        htmlRender +=`<li>${user.name}: ${comment.content}</li>`
    });
    commentBlock.innerHTML = htmlRender;
})


