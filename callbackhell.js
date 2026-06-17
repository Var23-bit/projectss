const cart =["apple", "banana", "orange"];

api.createorder(cart,function(){
    api.processpayment(function(){
        api.showorderdetails(
            function(){

                api.updateorderstatus()
            }
        )
    })

})