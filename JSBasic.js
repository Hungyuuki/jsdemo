/**
 * Hàm Built-in: hàm có sẵn, gọi ra dùng
 * 1. Alert
 * 2. Console: console là một đối tượng, log là phương thức
 * 3. Confirm
 * 4. Prompt
 * 5. SetTimeout chạy 1 lần
 * 6. SetInterval chạy liên tucj
 */

var number = 1;

console.log(number++); // 1
console.log(number); // 2
//dòng 13 hiện ra trước rồi mới tăng giá trị, đây là vì ++ ở sau biến
console.log(number++); // 2
console.log(number); // 3


var number = 1;

console.log(++number); // 2
console.log(number); // 2
//dòng 24 tăng giá trị trước rồi mới hiện ra, đây là vì ++ ở trước biến
console.log(++number); // 3
console.log(number); // 3
var name = 'hung \' pham';
console.log(name);

var isNull = null// = is nothing, ko có gì cả, ko cả undefine;

var myObject = {
    name: 'nobody',
    age: 30,
    myFunction: function () {
        console.log('nobody');
    }
}
console.log('myObject: ', myObject, typeof myObject)


function showDialog() {
    var myString;
    //code show Dialog
    //param là phần tử, arguments là mảng
    for (var param of arguments) {
        myString += `${param} - `
        //Đoạn code trên sử dụng template của String
    }
    console.log(myString)
};
showDialog("Going Merry", "Thousand Sunny");



var nameFull = "icon User Status User"
console.log(`Đây là:  ${nameFull}`)
console.log(nameFull.replace(/User/g, 'username'))

var lang = ['js', 'jv', 'php', 'python', undefined];
console.log(Array.isArray(['js', 'jv', 'php', 'python', undefined])) //kiểm tra xem lang có phải array ko, mảng được tự động đánh chỉ mục từ 0.
console.log(lang.pop());
//pop bỏ phần tử cuối và trả về ptử đó
console.log(lang);
console.log(lang.push('Ruby'));
//push để thêm ptu
console.log(lang);
lang.splice(3, 1, 'C#');//Đặt con trỏ ở index = 3, xóa 1 phần tử ở index = 3; từ tham số thứ 3 trở đi là những phần tử muốn thêm vào.
console.log(lang);
//concat: để ghép 2 mảng
var lang2 = ['C++'];
var arr = lang.concat(lang2);
console.log(arr);



// Có 2 cách tạo đối tượng:
//C1: tạo trực tiếp
var myInfo = { //đối tượng này bản thân bao gồm các thuộc tính và phương thức
    fullName: 'Anya Folger',
    age: 28,
    address: 'Cam Pha, Quang Ninh',
    [emailKey]: 'hungyuuki777@gmail.com',//key ở dòng 80 là email được thêm/truyền vào ở dòng số 83,
    getName: function() {
        return this.fullName //this chính là đối tượng myInfo
    }
};
// myInfo['my-email'] = 'hungyuuki777@gmail.com';
var emailKey = 'email';
console.log("Thông tin người dùng: ", myInfo);
// delete myInfo.age;
console.log(myInfo.getName());


//C2: tạo object constructor chung cho các loại đối tượng
function User(firstName, lastName, avatar) {
    this.firstName=firstName; //this dòng này được dùng để tạo cho đối tượng nói CHUNG các thuộc tính và phương thức
    this.lastName=lastName;
    this.avatar=avatar;
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`//this dòng này là để được gọi đến từ đối tượng RIÊNG biệt vừa tạo.
    }
}
var author = new User('Yor','Briar','avatar')//đối tượng
var user = new User('hanzawa', 'hannin', 'avatar')
User.prototype.className = "N2-Junbi" //prototype có thể thêm thuojc tính và phg thức ngoài hàm tạo, sau khi đối tượng được tạo ra 
// User.prototype.getClassName() = function() {
//     return this.className;
// }
console.log(author.getName())//Ví dụ this của dòng 98 là ám chỉ đối tượng author riêng biệt
console.log(user.getName())
console.log(author.className);
console.log(user.className)

//Date
var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
var hours = date.getHours() //gọi giờ
var minutes = date.getMinutes() //gọi phút
    // `${date.getHours()} ${date.getMinutes()}`

console.log(`${hours}/${minutes}/${day}/${month}/${year}`)



//Math Object
var random = Math.floor(Math.random() * 7) + 2;//random từ 0->40 vì có floor làm tròn xuống


// var bonus = ['10', '20', '30', '40', '50'];
// console.log(bonus[random])
console.log('thứ '+ random)




//Ternary operator
var course = {
    name: 'js',
    price: 250
}

var result = course.price > 0?`${course.price} usd`: 'free';
console.log(result)


var a = 1;
var b = 2;
var c = a>b? `${a}`:`${b}`
console.log(c)




//for loop
var bonus = ['10', '20', '30', '40', '50'];
var arrLength = bonus.length;
for (var i = 0; i < arrLength; i++) {
    console.log(i)

}

// for in
for (const key in myInfo) {
    console.log(myInfo[key])
}

var myString = 'Vagabond'
for (const key in myString) {
    console.log(myString[6])
}


//Ví dụ về for-in để lấy ra key-value của object
function run(object) {
    var arr = []//tạo một array rỗng để chuẩn bị đưa result vào
       for(var key in object){//for để lấy ra các key
           var result = `Thuộc tính ${key} có giá trị ${object[key]}`;
       arr.push(result);//push tất cả các result vào array
       }
       return arr;
}
// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));

//for-of: lấy phần tử của 1 mảng, ko lấy ra được nếu là một object
var language = "Bond";
for (var value of language) {
    console.log(value)
}
//trong trường hợp là một object thì ta phải chuyển obj đó sang mảng như sau
var obj = {//tạo obj
    name: 'Pham Hung',
    age: 18
};
console.log(Object.keys(obj))//đưa từng key của obj đó sang một mảng
for(var value of Object.keys(obj)) {//duyệt từng value 
    console.log(obj[value]);//in ra màn hình
}
//hoặc 
console.log(Object.values(obj))
for(var value of Object.values(obj)) {
    console.log(value);
}



// while loop
var myArr = [
    'ip7', 'ip8', 'ipXS'
]
var i = 0;
while (i<myArr.length) {  
    console.log(myArr[i]);
    i++;
}



// do-while loop
var i = 0;
var isSuccess = false;
do { //chạy trước ít nhất 1 lần rồi ktra điều kiện
    i++;
    console.log("Nạp thẻ lần "+i)
    if(true){
        isSuccess=true
    }
}
while (!isSuccess && i<3) //không thành công và số lần thử > 3 thì thôi ko cho nạp thẻ

//break là từ khóa thoát khỏi vòng lặp

//nested loop
var myArray = [
    [1,1], [2,1], [3,1]
];
for (var i = 0; i < myArray.length; i++) {
    for(var j = 0; j<myArray[i].length; j++) {
        console.log(myArray[i][j])
    }
}


var array = ['a','b','c','d','a','b','c'];
console.log(...[(new Set(array))]);



//đệ quy
/**
 * 1. Xác định điểm dừng
 * 2. Tạo điểm dừng bằng logic handle
 */
function countDown(num) {
    if ( num > 0 ) {
        console.log(num)
        return countDown(num-1);
    } else return num;
}
countDown(5);



function loop(start, end, callback) {
    if(start <= end){
        callback(start);
        return loop(start+1, end, callback)
    }
}

var array = ['java', 'javaScript', 'C#'];
loop(0, array.length-1, function(index){console.log('index: '+ index+" "+ array[index])})


//cách 1
function giaithua(num) {//tính giai thừa bằng vòng lặp
    var output = 1;
    for(var i = num; i > 0; i--) {
        output*=i;//output để nhân với i mục đích để tạo ra từng số hạng trong dãy giai thừa
    }
    return output;
}

console.log(giaithua(6));

//cách 2
function giaithua2(num) {//tính giai thừa bằng đệ quy
    if (num > 0){
        return num * giaithua2(num-1)
    }
    return 1;
}

console.log(giaithua(6));






