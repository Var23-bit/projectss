"use strict"
const obj = {
    name: "naveen",
    x: function(){
        console.log(this.name);
    }
}
const obj2 = { name: "Alice" };
obj.x(); // Output: "naveen"
obj.x.call(obj2); // Output: "Alice"
