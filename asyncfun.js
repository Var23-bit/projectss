const p = new Promise((resolve, reject) => {
    resolve("Promise resolved");
});
    async function getData() {
    return p;
}
const data = getData();
data.then((value) => {
    console.log(value);
});