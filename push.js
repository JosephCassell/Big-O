function randomNumberArr(max) {
  const res = new Array();

  for (let i = 0; i < max; i++) {
    const randomNumber = Math.floor(Math.random() * Math.floor(max));

    res.push(randomNumber);
  }

  return res;
}

function pushTest(arr) {
  const n = randomNumberArr(arr);
  const length = n.length;

  for (let i = 0; i < n; i++) {
    n.push(i);
  }

  return n;
}
let n = 1000;
let m = 10000
let o = 100000
let p = 1000000
console.time(`${n} `);
pushTest(n);
console.timeEnd(`${n} `);

console.time(`${m} `);
pushTest(m);
console.timeEnd(`${m} `);

console.time(`${o} `);
pushTest(o);
console.timeEnd(`${o} `);

console.time(`${p} `);
pushTest(p);
console.timeEnd(`${p} `);
