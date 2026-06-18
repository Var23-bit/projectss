const cart = ["apple", "banana", "orange"];
const promise = createorder(cart);
promise.then(function(orderID){
    console.log(orderID);
    //return processpayment(orderID);
})
function createorder(cart) {
   const pr = new Promise(function(resolve,reject) {
    if(!validateCart(cart)) {
        const error = new Error("Invalid cart");
        reject(error);
    } 
    const orderID = "1234";
    if(orderID){
        resolve(orderID);
    }   
 });
 return pr;
}
function validateCart(cart) {
    return true;
}