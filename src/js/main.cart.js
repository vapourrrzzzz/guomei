require.config({
    paths:{
        jquery:'./jquery',
        cart:'./lib/cart',
        cookie:'./lib/cookie'
    },
    shim:{}
})

require(['jquery','cart'],function($,cart){
    cart.render();
    cart.cart();
})