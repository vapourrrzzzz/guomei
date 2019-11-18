require.config({
    paths:{
        jquery:'./jquery',
        login:'./lib/login'
    },
    shim:{}
})

require(['jquery','login'],function($,login){
    login.login('.btn')
})