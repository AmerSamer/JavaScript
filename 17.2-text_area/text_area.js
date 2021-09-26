const textArea = document.querySelector('#text-area'),
        sub = document.querySelector('#sub')

sub.addEventListener('click', () => {
    if(textArea.value.length < 100) {
        textArea.style.color = 'red'
        textArea.style.borderColor = 'red'
        textArea.value = textArea.value + '\n' + '*** you must wrote at least 100 char ***'
    }
    if(textArea.value.length > 100) {
        textArea.style.color = 'black'
        textArea.style.borderColor = 'black'
    }
})