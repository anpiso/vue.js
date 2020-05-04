let f = function sum(...arr){
    let add = 0;
    for(let i = 0; i < arr.length; i++){
        add += arr[i];
    }
    return add;
}

const MAX = 10, MIN = 0;

function test_sum(f){
    let arr = [];
    let add = 0;

    for(let i = 0; i < 5; i++){
        arr[i] = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
    }

    console.log(arr);

    let result = f(arr);

    for(let i = 0; i < 5; i++){
        add += arr[i];
    }
    
    console.log(result);
    console.log(add);
}

for(let i = 0; i < 5; i++)
    test_sum(f);