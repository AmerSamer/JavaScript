function greaterThan10(number) {
    return new Promise((resolve, reject) => {
        if (number > 10) {
            resolve(number)
        } else {
            reject(number)
        }
    })
}

greaterThan10(5).then((number) => {
    console.log(`${number} greater than 10`)
}).catch((number) => {
    console.log(`${number} smallest than 10`)
})