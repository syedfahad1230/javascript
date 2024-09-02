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
