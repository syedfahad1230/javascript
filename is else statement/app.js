// console.log('hello world!');

// comparision operator
// >
// <
// >=
// <=
// ==
// ===
// !==
// !=

var num1 = 10;
var num2 = 5;
// console.log(num1 > num2);
// console.log(num1 < num2);
// console.log(num1 === num2);
// console.log(num1 != num2); false
// console.log(num1 !== num2); true
// console.log(num1 >= num2);
// console.log(num1 <= num2);


//logical operator

// || eng: orr  urdu:yaa
// && eng: and urdu: orr
// !

// console.log(num1 == num2 || num1 < num2 || num1 === num2)


// || koi aik bhi condition agar true hogaye to true return krdaiga.. sab conditions agar false hongi tabhi false ayega..

// && koi aik bhi condition agar false hogaye to false return krdaiga.. sab conditions agar true hongi tabhi true ayega..


// console.log(10 > 5 && 5 < 10)
// console.log(10 > 5 && 10 === 5 || 4 > 6 && 5 < 5);

// console.log(8 % 2 === 0 && 10 <= 10 || 5 + 6 !== 11 && 8 >= 8 || 9 != "9")

// true && true || false && true || false
//true || false && true || false
// true && true || false
// true || false
// true
//  console.log(
//     (15 % 4 === 3 && 20 > 15 || 7 * 3 === 21 && 12 - 6 !== 6) && (8 % 3 === 2 || 25 <= 30 && 5 !== 5) || (100 / 10 === 10 && 9 == "9" || 14 + 1 !== 15 && 7 <= 7)
// )

// console.log(
//     false && false || true
// )

// (15 % 4 === 3 && 20 > 15 || 7 * 3 === 21 && 12 - 6 !== 6)

// true && true || true && false
//  false

//  (8 % 3 === 2 || 25 <= 30 && 5 !== 5)

// false
// (100 / 10 === 10 && 9 == "9" || 14 + 1 !== 15 && 7 <= 7)

// true && true || false && true
// true

//control flow

// var username = 'abdullah';
// console.log(username);

// var num1 = 10;

//if else statement

// if(num1 > 5){
//     console.log('if chal rha ha')
// }else{
//     console.log('else chal rha ha')
// }


// var totalMarks = 90;

// if (totalMarks >= 80) {
//     console.log('A+ grade');
// } else if (totalMarks >= 70) {
//     console.log('A grade');
// } else if (totalMarks >= 60) {
//     console.log('B grade')
// } else {
//     console.log('fail');
// }

// console.log('console after if else')

// var bankBalance = 200000

// if(bankBalance > 1000000){
//     console.log('shaadi Mubarak')
// }else{
//     console.log('ammi na zehr kahlia')
// }



// var bankBalance = 40000;

// if(bankBalance > 1000000){
//     console.log('shaadi mubarak');
// }else if(bankBalance > 800000){
//     console.log('abbu sa baat krongi')
// }else if(bankBalance > 500000){
//     console.log('papa nahi maan rha')
// }else{
//     console.log('ammi keh rhi hain chalang maarlongi');
// }

var totalMarks = 400
var engMarks = +prompt('enter your eng marks')
var urduMarks = +prompt('enter your urdu marks')
var islMarks = +prompt('enter your isl marks')
var phyMarks = +prompt('enter your phy marks')

var obtainedMarks = engMarks + urduMarks + islMarks + phyMarks

var percentage = obtainedMarks / totalMarks * 100

// if (percentage > 80) {
//     console.log('a++')
// }else if (percentage > 70) {
//     console.log('a grade')
// }else if (percentage > 60) {
//     console.log('b grade')
// } else {
//     console.log('fail')
// }

// console.log(
//     ((10 + 5 * 2 === 20 || 30 / 2 <= 15) && (18 % 3 === 0 || 25 >= 25)) ||
//     ((4 ** 2 === 16 && 5 % 3 != 0) || (45 / 5 === 9 && 7 < 14)) &&
//     ((6 !== "6" && typeof 10 === 'number') || (20 + 30 > 60 && !true))
//   );
// console.log(
//    true && true || true || true && true || false
//   );



//   (10 + 5 * 2 === 20 || 30 / 2 <= 15)
// (18 % 3 === 0 || 25 >= 25)
// (4 ** 2 === 16 && 5 % 3 != 0)


// var hour = -2;

// if(hour > 24 || hour < 1){
//     console.log('sahi nahi ha bhai!')
// } else if(hour >= 22 || hour <= 5){
//     console.log('good night')
// } else if(hour > 5 && hour <= 12){
//     console.log('good morning')
// } else if(hour > 12 && hour <= 16){
//     console.log('good afternoon')
// } else {
//     console.log('good evening')
// }

// a , e, i ,o ,u

// user aik character daiga prompt ka through b
// var vowel = prompt('enter any one character')
// if (vowel.length > 1 || vowel.length < 1 || vowel.length === '') {
//     console.log('give one character')
// } else if (vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u') {
//     console.log('its a vowel')
// } else {
//     console.log('its not a vowel')
// }


// var num = 3;

// if(num >= 5){
//     console.log('num bara haa')
// if(num>7){
//     console.log('num sab s bara h')
// }else{
//     console.log('num bare s chota h')
// }
// }else{
//     console.log('num chota h')
// }

// console.log('hello world!');
// console.log('hello world!');
// console.log('hello world!');
// console.log('hello world!');

// alert()
// prompt()
// typeof()


// var alert = 'abc'
// console.log(alert);

// alert('hello')

// JavaScript Reserved Words