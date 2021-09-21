function arrLength(){
    let arr = ["boo", "doooo", "hoo","ro"];
    let arrayTemp = [];
    for(let i = 0 ; i < arr.length ; i++){
        let x = arr[i].length;
        arrayTemp.push(x);
    }
    console.log(arrayTemp);
}


arrLength();

/////////////////////////////
let arr = ["boo", "doooo", "hoo","ro"];
let arrayTemp = [];
let i = 0
while(i < arr.length){
    let x = arr[i].length;
    arrayTemp.push(x);
    i++
}