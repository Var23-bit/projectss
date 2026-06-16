const arr = [1, 2, 3, 4, 5];
function isOdd(x){
    return x % 2 !== 0;

}
function isEven(x){
    return x % 2 === 0;

}

const output = arr.filter(isOdd);
console.log(output);

const output2 = arr.filter(isEven);
console.log(output2);