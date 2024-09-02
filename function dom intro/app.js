// function greetuser(){
//     console.log('console inside function')
//     console.log('console inside function')
//     console.log('console inside function')
//     console.log('console inside function')
//     console.log('console inside function')
// }
// greetuser()//call krwana
// console.log('console after function')



// function greetuser(username, age, email) {
//     console.log('hello ' + username + ' and your age is ' + age + ' and your email is ' + email)
// }
// greetuser('fahad', 20, 'syedfahad@')
// greetuser('usman')





// function ka undar value receive krna ko parameter kehta hain

//function call krta waqt value pass krna ko arguments kehta hain

// function agar koi parameter receive kr rhaa haa liken argument nahi bheja to waha undefined ajayega

// function ramoKaka(item1, item2, item3) {
//     console.log('ye lo apka' + item1 + 'or' + item2 + 'or apke liye' + item3)
// }

// ramoKaka("korma" , "roti" , "cola next")
// ramoKaka("biryani" , "salad" , "Fizz up")
// ramoKaka("tinda" , "roti" , "paani")

// function greetUser(item){
//     var username = prompt('enter your name')
//     console.log(item)
// }
// greetUser('kofte')


// function greetUser(username , age , email){
//     console.log('hello ' +' email')
// }
// greetUser("abdullah" , "" , "email")

//nested function
//return keyword
//local or global variable

// var city = "karachi"; //global variable


// function showDetail(username){
//     console.log("hello " + username + " and he live in " + city)
//     var state = "sindh"; //local variable
// }

// console.log(state)
// showDetail('abdullah');



// function greetUser() {
//     console.log('hello abdullah');
// }
// function headClicked() {
//     console.log('h1 clicked')
// }

// var h1 = document.querySelector("#head")
// var para=document.querySelector('#para')
// var div=document.querySelector('div')
// h1.innerHTML = 'changed through javascript'

// function changedHead(){
//     console.log(h1.innerHTML)
//     h1.innerHTML = 'change through javascript'
//     para.innerHTML= 'para through <br/> javascript'
//  div.innerHTML = "<h1>Hello world</h1><ul><li>Home</li><li>about</li><li>contact</li></ul>"
// }

// var div = document.querySelector('div')
// div.innerHTML = "<h1 id='div-head'>hello js</h1>"

// var div = document.querySelector('div');

// function changedItems() {
//     if (div.innerHTML === 'hello') {
//         div.innerHTML = 'world'
//     } else {
//         div.innerHTML = 'hello'
// }
// }

// function() hum expect krta hain ka function kuch return kra.



// function greetUser(username){
//     console.log("hello " + username)
// }

// greetUser("abdullah")
// console.log(greetUser("abdullah"));
//  console.log(typeof("abdullah"));




// function sum(num1 , num2){
//     var sumOfNumber = num1 + num2
//     return sumOfNumber
// }

//  var sumOfAllProducts = sum(10 , 20);
//  console.log(sumOfAllProducts)
//  console.log(sum(30 , 40))



// function subtract(num1 , num2 , num3){
//     return num1 - num2 - num3
//     //console.log('hello')// xxxxx

// }
// console.log(subtract(10 , 20 , 30));



// function outerfunc(){
//     console.log('outer function called')
//     function innerfunc(){
//         console.log('inner function called')
//     }
//     innerfunc()
// }
// outerfunc()



// recurrsion

// var num = 0;

// function addNumber() {
//     if (num < 10) {
//         num += 1;
//         console.log(num)
//         addNumber()
//     } else {
//         console.log('else chal rha ha');
//     }

// }
// addNumber()


// var a = 10;
// function hello(num1) {
//     var b = 20
//     console.log(num1 , b);
//     // return num1 
    
// }

// console.log(a)
// console.log(b)
// var returnedVal = hello(20);
// console.log(hello());

// function hello(username){
//     return 'hello ' + username
// }

// hello("abdullah")

// var head = document.querySelector("#head");
// var num = 0
// function changeText() {
//     console.log("hello")
//     head.innerHTML = "change through javascript " + num
//     // num = num + 1 same
//     num += 1
// }

// var head = document.querySelector("#head")
// var num = 0

// function counter() {
//     num += 1
//     head.innerHTML = 'change through javascript'+ num

    
// }
// function minus() {
//     if(num === 0){
//         console.log("ya nahi chalaiga")
//     }else{
//     num -= 1
//     head.innerHTML = 'change through javascript'+ num

//     }
//  }