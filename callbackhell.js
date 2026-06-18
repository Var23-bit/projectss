const cart =["apple", "banana", "orange"];

createorder(cart,function(orderID){
    processpayment(orderID,function(paymentInfo){
        showorderdetails(paymentInfo,function(){
            updatewallet(paymentInfo,function(){
            });
        });

    });
        
    });
    createorder(cart)
    .then(function(orderID){
        return processpayment(orderID);
    })
    .then(function(paymentInfo){
        return showorderdetails(paymentInfo);
    })
    .then(function(paymentInfo){
        return updatewallet(paymentInfo);
    });