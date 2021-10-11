let arrayToDo = [document.getElementById("result").innerHTML = localStorage.getItem("arrayToDo")]
let add = document.querySelector('.addBtn')
let res = document.querySelector('#result')
// let i = 0
add.addEventListener('click', showToDo)

function showToDo() {
    let input = document.getElementById("myInput").value
    arrayToDo.push(`<div class="cls">${input}</div>`)
    // i++
    locStorage()
}

function locStorage() {
    if (typeof (Storage) !== "undefined") {
        // Store
        localStorage.setItem("arrayToDo", arrayToDo.join(''));
        // Retrieve
        document.getElementById("result").innerHTML = localStorage.getItem("arrayToDo");
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }

}