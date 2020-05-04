let sum = function(...arr){
    return arr.reduce((a,b)=>{return a+b});
}

const MAX = 10, MIN = 0;

function test_sum(sum){
    let arr = [];
    for(let i = 0; i < 5; i++){
        arr[i] = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
    }

    console.log(arr);

    let result = 0;

    result = sum(arr);

    console.log(result);

}

for(let i = 0; i < 5; i++)
    test_sum(sum);