// var userInput = +prompt("enter a number");

// console.log(userInput +' * 1 = ' + userInput * 1)
// console.log(userInput +' * 2 = ' + userInput * 2)
// console.log(userInput +' * 3 = ' + userInput * 3)
// console.log(userInput +' * 4 = ' + userInput * 4)
// console.log(userInput +' * 5 = ' + userInput * 5)
// console.log(userInput +' * 6 = ' + userInput * 6)
// console.log(userInput +' * 7 = ' + userInput * 7)
// console.log(userInput +' * 8 = ' + userInput * 8)
// console.log(userInput +' * 9 = ' + userInput * 9)
// console.log(userInput +' * 10 = ' + userInput * 10)


//for loop
//while loop
//do while loop


//initialization
//condition
//increment

// for(var i = 1; i <= 10; i++){
//     console.log('2*'+ i + '=' + 2 * i)
// }


// loop k through array render 


// var div = document.querySelector("div");
// var fruits = ['apple', 'banana', 'orange', 'kiwi'];

// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])
// console.log(fruits[3])

// for (var i = 0; i < fruits.length; i++){
// console.log(fruits[i])
//     div.innerHTML +=fruits[i] + "<br/>"
// }

// dom manipulation
// loop ka through array render krwana
// splice
// push

// nested loop

// for(var i = 0; i < 10; i++){
//     console.log("outer loop " , i)
//     for(var j = 0; j < 10; j++){
//         console.log('inner loop ' , j)
//     }
// }

// for(var i = 1; i <= 100; i++){
//     console.log("table of  " , i , "====")
//     for(var j = 1; j <= 10; j++){
//         console.log(i + " * " + j +  " = " + i * j)
//     }
// }

// while
// do while


// for(var i = 1; i <= 9; i++){
//     console.log("2 * " + i + " = " + 2 * i);
// }

// var i = 0;
// while (i < 10) {
//     console.log("2 * " + i + " = " + 2 * i);
//     i++
// }

// var i = 1
// do{
//     console.log("2 * " + i + " = " + 2 * i);
//     i++
// }while(i <= 10)

// 5 track hogya yni
// for(var i = 1; i <= 10; i++){
//     if(i == 5){
//         console.log('5 tracked');  
//     }
//     console.log(i)
// }

// break 4 p rok dega
// for(var i = 1; i <= 10; i++){
//     if(i == 5){
//         console.log('5 tracked');
//         break
//     }
//     console.log(i)
// }


//continue 5 skip krdega

// for(var i = 1; i <= 10; i++){
//     if(i == 5){
//         console.log('5 tracked');
//         continue
//     }
//     console.log(i)
// }


// backtick string

// var username = "abdullah";
// var age = 21;

// console.log("my name is " + username + " and my age is " + age)

// console.log(`my name is ${username} and my age is ${age}`)

//CRUD 

// Create
// read
// update
// delete

// var div = document.querySelector("div");
// var fruit = ["mango", "orange", "banana"];

// fruit.push("pineapple");

// fruit.splice(1, 0, "apple", "abc");

// for (var i = 0; i < fruit.length; i++) {
//     console.log(fruit[i]);
//     div.innerHTML += `fruit name = ${fruit[i]} <br/>`
// }









// var input = document.querySelector('#todo');
// var list = document.querySelector('ol');
// var todo=[];
// function renderTodo() {
//     // console.log(input.value)
//     list.innerHTML = ''
//     for (var i = 0; i < todo.length; i++) {
//         list.innerHTML += `<li>${todo[i]}
//         <button onclick="deleteTodo(${i})">delete</button>
//         <button onclick="editTodo(${i})">edit</button>
//         </li>`
//     }
// }


// function addTodo() {
//     todo.push(input.value);
//     console.log(todo);
//     input.value = ''
//     renderTodo()
// }

// function deleteTodo(index){
//     console.log("todo deleted",index)
// todo.splice(index,1)
// renderTodo()
// }


// function editTodo(index){
//     var editedValue = prompt('enter new value');
//     todo.splice(index,1,editedValue)
//     renderTodo()
//     }


