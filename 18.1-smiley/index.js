const text = document.querySelector('#text'),
    sub = document.querySelector('#sub'),
    smile = document.querySelector('#smile')

sub.addEventListener('click', () => {
    let num = Number(text.value)
    if(num){
        smile.innerHTML = '😊'.repeat(num)
    }else{
        smile.innerHTML = 'Error'
    }
})