let array = ["hello", "good day", "your welcome", "hotdog", "hamburgers"];
let result = array.join('').split('').reduce(function (o, e) {
    return o[e] = (o[e] || 0) + 1, o
}, {});

console.log(result)