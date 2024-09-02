
//round
//ceil
//floor
//Number()
//parseInt
//parseFloat
//tofixed
//random

//toss


// var num = 10.92;
// console.log(Math.round(num));
// console.log(Math.ceil(num)) aik number bhi dia . me 1 num age hojaega
// console.log(Math.floor(num))  . me num ka koi faida ni 
// console.log(Number(num))
// console.log(typeof(+num))

// const num = '20dsfsdfds';
// console.log(Number(num));
// console.log(+num);
// console.log(typeof(+num));

// var num = 10.76465;
// var convertStr = parseInt(num)// point wale ni
// var convertStr = parseFloat(num)// point wale show h

// console.log(convertStr);
// console.log(num.toFixed(2))//jtne bolege utne point m

// var arr = [1, 3, 6, 8, 4, 9, 3, 76, 3, 7, 84, 65, 234, 9, 45, 23]

// var largestNum = 0
// for (let i = 0; i < arr.length; i++) {
//     if(largestNum<arr[i]){
//         largestNum=arr[i]
//     }
// }console.log(largestNum)


// const num = 9.9;
// console.log('round===>', Math.round(num));
// console.log('ceil ===> ', Math.ceil(num));
// console.log('floor ===> ', Math.floor(num));


// console.log(Math.ceil(Math.random()*10));
// console.log(Math.ceil(Math.random()*5));
// console.log(Math.ceil(Math.random()*100));

// chand=0
// masjid=1

const image = document.querySelector('#coin-image');
const h1 = document.querySelector('h1');
// image.src = 'https://www.foreigncurrencyandcoin.com/wp-content/uploads/2018/12/products-18814.jpg'
// console.log(image);

function toss(coin) {
    const randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber === 0) {
        image.src = 'https://www.foreigncurrencyandcoin.com/wp-content/uploads/2018/12/products-18814.jpg'
    } else {
        image.src = 'https://en.numista.com/catalogue/photos/pakistan/424-original.jpg'
    }

    if (coin === 'chand' && randomNumber === 0 || coin === 'masjid' && randomNumber === 1) {
        h1.innerHTML = 'toss jeet gaye ho';


    } else {
        h1.innerHTML = 'user toss haar gayaa';
    }
}







