const nums = [10, 21, 31, 40, 50]

////////////////////////// A //////////////////////////
const max = nums.reduce((max, currVal) => {
    return Math.max(max, currVal)
})

console.log(max);
 
////////////////////////// B //////////////////////////
const sumEven = nums.filter(b => b % 2 == 0).reduce((a, b) => (a + b))

console.log(sumEven);

////////////////////////// C //////////////////////////
function avg(nums) {
    return nums.reduce((a, b) => (a + b)) / nums.length ;
}

console.log(avg(nums));
