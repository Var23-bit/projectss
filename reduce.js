const user = [
    {firstName: "John", lastName: "Doe", age: 30},
    {firstName: "Jane", lastName: "Smith", age: 25},
    {firstName: "Alice", lastName: "Johnson", age: 28}
];
const arr = [1, 2, 3, 4, 5];
const output =arr.reduce(function(acc,curr){
    acc = acc + curr;
    return acc;
},0);
console.log(output);
const output2 = arr.reduce(function(max,curr){
    if(curr > max){
        max = curr;
    }    return max;
},0);
console.log(output2);
const output3 = user.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }    else{
        acc[curr.age] = 1;
    }
    return acc;
},{});
console.log(output3);