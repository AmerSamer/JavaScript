function makeAllCaps(array) {
    return new Promise((resolve, reject) => {
        let arr = array.map((str) => {
            if (array.every(i => (typeof i === "string"))) {
                return str.toUpperCase()
            }
            reject({ status: 404 })
        })
        resolve(arr)
    })
}

function sortWords(array) {
    return new Promise((resolve, reject) => {
        if (!array.every(i => (typeof i === "string"))) {
            reject({ status: 404 })
        }
        resolve(array.sort())
    })
}

makeAllCaps(['samer', 5]).then((array) => {
    sortWords(array).then(() => {
        console.log(`${array}`)
    })
}).catch((err) => {
    console.log(err)
})

