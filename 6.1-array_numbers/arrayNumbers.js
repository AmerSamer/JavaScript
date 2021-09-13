const arr = [1,7,3,0,-5,7,3,9];
function printAllArr(arr){
     arr.forEach(element => {
            console.log(element);
        });
}

printAllArr(arr);
// 2. Create function “arrayLength” that return the array length (don’t use arr.length)
function arrayLength(arr){
    let counter = 0;
    arr.forEach(element => {
            counter++;
    });
    return counter;
}
console.log(arrayLength(arr));

// 3. Create function “arraySum” , the function return the sum of all elements in array.
function arraySum(arr){
    let total = 0;
    for(let i = 0 ; i < 8 ; i++){
        total += arr[i];
    }
    return total;
}
console.log(arraySum(arr));
// 4. Create function “arrayMulti” , the function return the multiplication of all the elements in array.

function arrayMulti(arr){
    let total = 0;
    for(let i = 0 ; i < 8 ; i++){
        total *= arr[i];
    }
    return total;
}
console.log(arrayMulti(arr));