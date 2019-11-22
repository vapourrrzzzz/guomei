require.config({
    paths: {
        jquery: './jquery',
        product: './lib/product',
        lazyload: './lazyload'
    },
    shim: {
        lazyload:['jquery']
    }
})

require(['jquery', 'product', 'lazyload'], function ($, product, lazyload) {
    product.getdata()
})