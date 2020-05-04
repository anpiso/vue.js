let arr = [];

const MAX = 100, MIN = 1;

for(let i = 0; i < 100; i++){
    arr[i] = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
}

function callback(a, b){
    return a + b;
}

let sum = arr.reduce(callback) / arr.length;

console.log(sum.toPrecision(3));