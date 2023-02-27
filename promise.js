/**
 * PROMISE: 
 * Nhắc lại kiến thức:
 * -Đồng bộ: 
 * +Sync: code chạy từ trên xuống dưới lần lượt, nếu bên trên chạy lâu sẽ ảnh hưởng tới các lệnh dưới
 * +Async: Nhiều lệnh có thể thực hiện cùng lúc, có khi lệnh dưới cho ra kết quả trước câu lệnh trên, nhưng khó kiểm soát lỗi.
 * +Nỗi đau khó xử lý bất đồng bộ: callback hell(nhiều dữ liệu bị ràng buộc nhau), pyramid of doom
 * +Lý thuyết, cách hoạt động của Promise
 * +Thực hành:
 * 
 * 
 * 
 * jS là ngôn ngữ đồng bộ nhưng có hàm xử lý bđb, ngoài ra thì đơn luồng.
 * Các hàm xử lý bđb: viết trước nhưng khi xử lý thì chưa chắc đã xong trước
 * setTimeout(callback), 
 * setInterval, 
 * fetch(call API), gọi 1 yêu cầu qua mạng, ko biết khi nào gọi xong
 * XMLHttpRequest, 
 * readingFile,
 * request animation frame, ...
 * -JSON SERVER: Fake API
 * -CRUD 
 * 
 */

//sleep 1 giây
// setTimeout(() => {
//     console.log(1);
//     setTimeout(()=> {
//         console.log(2);
//         setTimeout(()=> {
//             console.log(3); //Việc bên trong phải chờ việc bên ngoài thực hiện xong
//         }, 1000) 
//     }, 1000) 
// }, 1000);


// khởi tạo promise và truyefn vào promise một function
//function này sẽ được thực thi nếu ta gọi tới đối tượng promise này
/**
 * Có 2 trạng thái:
 * 1. Pending: đang chờ được thực thi.
 * 2. Fullfilled: đã được thực thi.
 * 3. Reject: chạy thất bại
 */
var promise = new Promise(
    //Executor
    function(res, rej) {//2 tham số này đều là hàm
        //logic
        //Nếu thành công thì trả về resolve,
        //nếu thất bại thì trả về reject
        res([
            {
                id: 1,
                name: 'Chánh kiến 1',
                price: 80,
            }
        ])
        // rej();
    }
)


//Đây là một chain, chuỗi các hàm nối nhau
promise
    .then(function(){//khi response được gọi thì callback của then được gọi
        return new Promise(function(res){//khi return ra một promise thì phải chờ function chạy thì những hàm sau mới chạy
            setTimeout(function() {
                res([1, 2, 3])
            }, 3000)//Promise này đang ko return gì, nên giá trị console.log ra là undefine
        });//còn nếu có return, tức là có nhận được dữ liệu thì mới lấy kết quả trả về đó và chạy .then bên dưới
    })
    .then(function(data){//khi response được gọi thì callback của then được gọi
    console.log(data)//undefine
    return 2
    })
    .catch(function(err){//khi response được gọi thì callback của catch được gọi
console.log('Failure')
})
    .finally(function(){//khi res hay rej được gọi thì callback của finally đều được gọi
console.log('Done')
})

