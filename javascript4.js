console.log("start");

function a(){
    console.log("i am inside setTimeout");
}
setTimeout(a,0);
console.log("end");
let startdate = new Date().getTime();
let enddate = startdate;
while(enddate < startdate + 0){
    enddate = new Date().getTime();
}
console .log("while expire");