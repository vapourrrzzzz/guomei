require.config({
    paths:{
        jquery:'./jquery',
        product:'./lib/product'
    },
    shim:{}
})

require(['jquery','product'],function($,product){
    product.getdata()
})