let sub = document.querySelector('#sub'),
    succ = document.querySelector('#succ'),
    fullname = document.querySelector('#fullname'),
    age = document.querySelector('#age'),
    email = document.querySelector('#email')

sub.addEventListener('click', function () {
    if (confirm(`Name: ${fullname.value}\nAge: ${age.value}\nEmail: ${email.value}`)) {
        succ.innerHTML = 'congratulations you successfully sent this form';
    }
})

