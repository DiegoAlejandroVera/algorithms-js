function fibonacci(n) {
  let x = 0;
  let y = 1;
  let z;
  const total = [];

  total.push(x);
  total.push(y);

  for (let i = 2; i < n; i++) {
    z = x + y;
    x = y;
    y = z;

    total.push(y);
  }

  return total;
}

function recursiveFibo(n) {
  if (n < 2) return n;

  return recursiveFibo(n - 1) + recursiveFibo(n - 2);
}

function fiboSequence(n) {
  const total = [];
  for (let i = 0; i < n; i++) {
    total.push(recursiveFibo(i));
  }
  return total;
}

console.log(fiboSequence(10));
