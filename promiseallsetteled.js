const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 1 resolved"), 1000);
    //setTimeout(() => reject(new Error("Promise 1 rejected")), 1000);

});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 2 resolved"), 3000);

});
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 3 resolved"), 5000);

});

Promise.allSettled([p1, p2, p3]).then((results) => {
    console.log(results);
}).catch((error) => {
    console.log(error.message);
});