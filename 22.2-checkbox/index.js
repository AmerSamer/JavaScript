function toggleVisibility() {
    let image = document.querySelector('#image')

    if (image.style.visibility == "visible") {
        image.style.visibility = "hidden";
    } else {
        image.style.visibility = "visible";
    }
}