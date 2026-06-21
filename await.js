const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved");
    }, 1000);
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved");
    }, 10000);
});
async function handlepromise() {
    console.log("before promise");
    const val  = await p;
    console.log("nammaste promise");
    console.log(val);


    const val2  = await p2;
    console.log("nammaste promise");
    console.log(val2);
}
handlepromise();
