
// var fruit = ['mango' , 'watermelon' , 'orange' , 'banana' , 'peach'];
// array to store multiple data in one function
// array is object []

//length start with 1
//index start with 0

// console.log(typeof(fruit));
// console.log(fruit);
// console.log(fruit[2]);

// var mixedArr = ['apple' , true , 20]
// console.log(mixedArr)


// function == () direct  jese alert
// methods == () . se start

//push
//pop
//unshift
//shift
//splice
//slice
//split
//join
//concat
//sort
//reverse
//indexof

var fruit =['mango' , 'watermelon' , 'orange' , 'banana' , 'peach' , 'guava' , 'melon' , 'avacado' , 'apple' , 'pineapple' , 'lychee' , 'kiwi']
// // fruit.push('am')end me add
// // fruit.pop()end se ura dia
// // fruit.unshift('hyd')shuru m add
// // fruit.shift()first ura dia
// fruit.splice(2,2) //yani 2 index se start hoge or ktne urane h

//slice  === shallow copy  yani 2 se start hoga or 6length tk show hoga
// var copyArr = fruit.slice(2 ,6);
// console.log(copyArr);
// console.log(fruit)

//  var names = 'Muhammad Abdullah khan';
// var arr = names.split(' ')seperate string me
// console.log(arr);

// var arr = ['Muhammad', 'Abdullah', 'khan'];
// var str = arr.join(' ');simple krdeta he join
// console.log(str);

// var fruit1 = ['mango' , 'orange' , 'banana'];
// var fruit2 = ['kiwi' , 'avacado' , 'strawberry'];

// var newArr = fruit1.concat(fruit2); + krdeta h
// console.log(newArr);

// var num = [4,6,2,8,3,1,9];
// var sortedArr = num.sort()
// console.log(sortedArr);
// var reversedArr = num.reverse()
// console.log(reversedArr);

// console.log(fruit.indexOf('peach'));


// var arr = ['muhammad' , ['abdullah' , ['khan']]]
// console.log(arr[1][1][0]);

// var arr = new Array("hello" , 'world');
// console.log(arr);

// const deeplyNestedArray = [[[[1, 2], [3, 4]], [[5, 6], [7, 8]]], [[[9, 10], [11, 12]], [[13, 14], [15, 16]]], [[[17, 18], [19, 20]], [[21, 22], [23, 24]]]];
// console.log(deeplyNestedArray[1][1][1][0])


// initial conditn increment



var chemMarks = document.querySelector('#chem');
var physMarks = document.querySelector('#phys');
var engMarks = document.querySelector('#eng');
var urduMarks = document.querySelector('#urdu');
var result = document.querySelector('#result');

var totalMarks = 400;

function calculatePercentage(){
    if(+chemMarks.value > 100 || +physMarks.value > 100 || +engMarks.value > 100 || urduMarks.value> 100){
        alert('marks should be less than 100')
    } else if(chemMarks.value === "" || physMarks.value === "" || engMarks.value === "" || urduMarks.value=== ""){
        alert('enter marks')
    }
    else{
        var obtainedMarks = +chemMarks.value + +physMarks.value + +engMarks.value + +urduMarks.value

        var percentage = obtainedMarks / totalMarks * 100;

        var grade = 'A';

        if(percentage >= 80){
            grade = 'A+'
        } else if(percentage >= 70){
            grade = 'A'
        } else if(percentage >= 60){
            grade = 'B'
        } else if(percentage >=50){
            grade = 'C'
        }   
        
        result.innerHTML = "You have obtained " + obtainedMarks + " out of " + totalMarks + " and your percentage is " + percentage + "% with grade " + grade
    }
}