// 1. Create array containing jumps of acrobats, each 3 numbers representative 1 jumper.
// for example : [5,5,8,7,-1,5] represent 2 jumpers. (The -1 means that the jump not accept)
let arr = [5, 5, 8, 7, -1, 5];
// 2. Create function “avgJumper” that return average for each jumper
// example : [6,6] (the -1 is not includes on average).
function avgJumper() {
    let arr = [5, 5, 8, 7, -1, 5];
    let arrAvg = [];
    
    for (let i = 0; i < arr.length; i=i+3) {
        let sum = 0;
        let counter=0;
        if(arr[i] > 0){
            sum += arr[i];
            counter++;
        }
        if(arr[i+1] > 0){
            sum += arr[i+1];
            counter++;
        }
        if(arr[i+2] > 0){
            sum += arr[i+2];
            counter++;
        }
        avg = sum / counter;
        arrAvg.push(avg);
    }
    console.log(arrAvg);
}
avgJumper();

// 3. Create function “bestAvgJump” return the best avg jump from all jumpers.
function bestAvgJump(){
    return Math.max(avgJumper());
}

bestAvgJump();

// 4. Create function “bestJump” return the best jump.
function bestJump(arr){
    return Math.max(...arr);
}

console.log(bestJump(arr));