function sum(...arr){
    let result = 0;
    for(let i = 0; i < arr.length; ++i){
        result += arr[i];
    }
    return result;
}

function test_sum(sum){
    let arr = [];
    const MAX = 10, MIN = 0;

    for(let i = 0; i < 5; i++){
        arr[i] = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
    }
    let result = sum(arr);
    
    console.log = result;
}

for(let i = 0; i < 5; i++){
    console.log(test_sum);
}