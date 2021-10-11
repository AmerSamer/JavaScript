let arrayToDo = []

arrayToDo.push(1,2,3)





if (typeof (Storage) !== "undefined") {
    // Store
    console.log(arrayToDo);
    localStorage.setItem("arrayToDo", arrayToDo);
    // Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem("arrayToDo");
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}

