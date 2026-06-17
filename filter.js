const user = [
    {firstName: "John", lastName: "Doe", age: 30},
    {firstName: "Jane", lastName: "Smith", age: 25},
    {firstName: "Alice", lastName: "Johnson", age: 28}
];
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
const output3 = user.filter((x) => x.age < 27).map((x)=>x.firstName );
console.log(output3);