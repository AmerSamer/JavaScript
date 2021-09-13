function printNum(n) {
    for (let i = 1; i <= n; i++) {
        if ([i].includes(7)) {
            if (i % 7 == 0) {
                console.log("BOOM-BOOM");
            }
        }else if (i % 7 == 0) {
                console.log("BOOM");
            
        }else{
            console.log(i);
        }
    }
}

printNum(30)