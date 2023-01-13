const phoneInp = document.querySelector('#phoneInp')
const phoneButton = document.querySelector('#phoneButton')
const phoneResult = document.querySelector('.phoneResult')





const phoneRegExp = /^\+[7|8] \d{3} \d{3} \d{4}$/

phoneButton.addEventListener('click', () => {
    if (phoneRegExp.test(phoneInp.value)){
        phoneResult.innerText = 'DONE!'
        phoneResult.style.color = 'green'
    }else {
        phoneResult.innerText = 'NO!'
        phoneResult.style.color = 'red'
    }
})


let block = 0;

const position = () => {
    block++
    if (block > 450) return;
    document.querySelector('.block_small').style.left = block + 'px';
    animation()
}
function animation(){
    setTimeout(position, 10)
 }
 animation()




