const startMain = document.querySelector('.start-here')
startMain.innerHTML = 'main title'

const ol = document.querySelector('.ulSubTitle')
const li = document.createElement('li')
li.innerHTML = 'sub title 4'
ol.appendChild(li)

const lastli = document.querySelector('.lastli')
lastli.remove()

const title = document.querySelector('title')
title.innerHTML = 'Master Of The Dom'

const pp = document.querySelector('p')
pp.innerHTML = 'Real Madrid'


