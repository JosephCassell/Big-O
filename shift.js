function randomNumberArr(max) {
  const res = new Array();

  for (let i = 0; i < max; i++) {
    const randomNumber = Math.floor(Math.random() * Math.floor(max));

    res.push(randomNumber);
  }

  return res;
}
function shiftTest(n) {
  const arr = randomNumberArr(n);
  for (let i = 0 ; i < n ; i++) {
    arr.shift();
  }

  return n;
}



let n = 1000;
let m = 10000
let o = 100000
let p = 1000000
console.time(`${n} `);
shiftTest(n);
console.timeEnd(`${n} `);

console.time(`${m} `);
shiftTest(m);
console.timeEnd(`${m} `);

console.time(`${o} `);
shiftTest(o);
console.timeEnd(`${o} `);

console.time(`${p} `);
shiftTest(p);
console.timeEnd(`${p} `);
