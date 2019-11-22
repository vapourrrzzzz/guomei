require.config({
    paths:{
        jquery:'./jquery',
        cart:'./lib/cart',
    }
})

require(['jquery','cart'],function($,cart){
    cart.cart();
    
})