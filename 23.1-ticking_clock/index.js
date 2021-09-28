function startTime() {
    let clock = document.querySelector('#clock')
    const currentTime = new Date();
    let h = currentTime.getHours();
    let m = currentTime.getMinutes();
    let s = currentTime.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    clock.innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i;
}