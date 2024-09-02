// function hello(){
//     console.log("hello world!")
// }


// const head=document.querySelector('#head')
// head.addEventListener('click',hello)

// const btn=document.querySelector('#btn')
// btn.addEventListener('mouseover',function(){
//     console.log('add event ')
// })

// const image=document.querySelector('#image')
// image.addEventListener('mouseout',function(){
//     image.src ="https://i.pinimg.com/564x/e0/fd/25/e0fd25f9127a9a109a0648c83ee61643.jpg"
// })

// image.addEventListener('mouseover',function(){
//     image.src="https://images.freeimages.com/images/large-previews/07c/light-bulb-2-1427493.jpg?fmt=webp&w=500"
// })


//bubbling
//capturing
//target source img wali bta rhi h pori
// parentNode parent k nam bta rha h
//src http wala bta rha h
//tagname tag k nam bta rha 
//remove (); krta h


// const ul = document.querySelector('ul')
// const image = document.querySelector('#image-2')

// ul.addEventListener('click', function (event) {
//     if (event.target.parentNode.tagName === 'LI') {
//         event.target.parentNode.remove()
//     }
//     console.log(event.target.src)
// }, true)

// image.addEventListener("click", function () {
//     console.log("image clicked")
// } , true)

// const form = document.querySelector("#form")
// const fullname = document.querySelector("#fullname")
// const email = document.querySelector("#email")
// const password = document.querySelector("#password")
// const google = document.querySelector("#google");


// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const cnicRegex = /^\d{5}-\d{7}-\d{1}$/

// form.addEventListener('submit', function (event) {
//     event.preventDefault()
//     if (!emailRegex.test(email.value)) {
//         console.log("email is invalid");

//     }
//     // console.log(email.value)
//     console.log(password.value);
//     // console.log(fullname.value);
// })

// google.addEventListener("click", function (event) {
//     event.preventDefault()
//     console.log('anchor tag clicked');

// })

// const userEmail = "syedfahadqamer@gmail.com"
// const isValid = emailRegex.test(userEmail);
// console.log(isValid);

// const form=document.querySelector('#form')
// form.addEventListener('submit',function(){
//     console.log('add event')
// })