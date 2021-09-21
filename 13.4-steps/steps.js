// function x (n){
//     for(let i = 1 ; i <= n ; i++){
//         console.log('#'.repeat(i));
//     }
// }

// x(5)
function repeatStringNumTimes(string, times) {
    var repeatedString = "";

    while (times > 0) {
        repeatedString += string;
        times--;
        console.log(repeatedString);
    }

    return repeatedString;
}

repeatStringNumTimes("#", 3)
