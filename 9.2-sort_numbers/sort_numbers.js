const numbers = [1, -5, 666, 2, 400, 11];
const nums = [1, -5, 666, 2, 400, 11];

  numbers.sort(function(a, b) {
    return a - b;
  });
  nums.sort(function(a, b) {
    return b - a;
  });

  console.log(numbers);
  console.log(nums);