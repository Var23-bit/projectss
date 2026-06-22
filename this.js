"use strict";
console.log(this);

function x(){
    console.log(this);
}
x();
//window.x();


const obj = {

    name: "naveen",
    x: function(){
        console.log(this.name);
    }
}
obj.x();

const obj2 = {
    name: "alice",
}
obj.x.call(obj2);