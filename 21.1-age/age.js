const age = document.querySelector('#age'),
    sub = document.querySelector('#sub'),
    pid =  document.querySelector('#pid')

    sub.addEventListener('click', function(){
        if(age.value < 18){
            // alert('you cantttt drink appear')
            pid.innerHTML = 'you’re too young'
            pid.style.color = 'red'
        }else if(age.value >= 18){
            // alert('you can drink appear')
            pid.innerHTML = 'you can drink appear'
            pid.style.color = 'green'
        }
    })

    