function randomNumberArr(max) {
  const res = new Array();

  for (let i = 0; i < max; i++) {
    const randomNumber = Math.floor(Math.random() * Math.floor(max));

    res.push(randomNumber);
  }

  return res;
}
function popTest(arr) {
  const n = randomNumberArr(arr);
  const length = n.length;

  for (let i = 0 ; i < length ; i++) {
    n.pop();
  }

  return length;
}
let n = 1000;
let m = 10000
let o = 100000
let p = 1000000
console.time(`${n} `);
popTest(n);
console.timeEnd(`${n} `);

console.time(`${m} `);
popTest(m);
console.timeEnd(`${m} `);

console.time(`${o} `);
popTest(o);
console.timeEnd(`${o} `);

console.time(`${p} `);
popTest(p);
console.timeEnd(`${p} `);
