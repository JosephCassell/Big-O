function randomNumberArr(max) {
  const res = new Array();

  for (let i = 0; i < max; i++) {
    const randomNumber = Math.floor(Math.random() * Math.floor(max));

    res.push(randomNumber);
  }

  return res;
}
function unshiftTest(n) {
  const arr = randomNumberArr(n);

  for (let i = 0; i < n; i++) {
    arr.unshift(i);
  }

  return arr;
}
let n = 1000;
let m = 10000
let o = 100000
let p = 1000000
console.time(`${n} `);
unshiftTest(n);
console.timeEnd(`${n} `);

console.time(`${m} `);
unshiftTest(m);
console.timeEnd(`${m} `);

console.time(`${o} `);
unshiftTest(o);
console.timeEnd(`${o} `);

console.time(`${p} `);
unshiftTest(p);
console.timeEnd(`${p} `);
