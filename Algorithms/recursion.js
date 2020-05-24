function factorial(num) {
  if (num === 2) {
    return 2;
  }
  return num * factorial(num - 1);
}

function fibonacciSequence(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciSequence(n - 1) + fibonacciSequence(n - 2);
}
console.log(fibonacciSequence(10));

function fiboIterative(n) {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}
