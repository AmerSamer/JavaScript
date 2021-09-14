
let array = {A : 1, B : 2, C : 3, D : 4}
function swap(arr){
    let ret = {};
    for(let x in arr){
      ret[arr[x]] = x;
    }
    return ret;
  }

 console.log(swap(array));