
const head = document.querySelector('#timer')
 var timer;
 
var num = 0
function startTimer() {
   timer= setInterval(function () {
        num += 1
        head.innerHTML = num
    }, 1000);
}
function stopTimer() {
    clearInterval(timer)
}
function resetTimer(){
   clearInterval(timer)
   head.innerHTML=0
    num=0
}