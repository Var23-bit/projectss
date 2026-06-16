const arr = [1, 2, 3, 4, 5];
const double = function(x) {
    return x * 2;
}
const triple = function(x) {
    return x * 3;
}
const binary = function(x) {
    return x.toString(2);
}
const output = arr.map( double);
const output2 = arr.map(triple);
const output3 = arr.map(binary);
console.log(output);
console.log(output2);
console.log(output3);
