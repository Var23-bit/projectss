const cart = ["apple", "banana", "orange"];
const promise = createorder(cart);
promise.then(function(orderID){
    console.log(orderID);
    //return processpayment(orderID);
})
.catch(function(error){
    console.log(error.message);
});
function createorder(cart) {
   const pr = new Promise(function(resolve,reject) {
    if(!validateCart(cart)) {
        const error = new Error("cart is not valid");
        reject(error);
    } 
    const orderID = "1234";
    if(orderID){
        setTimeout(function() {

        resolve(orderID);},5000);
    }   
 });
 return pr;
}
function validateCart(cart) {
    return true;
}