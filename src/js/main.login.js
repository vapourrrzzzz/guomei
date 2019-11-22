require.config({
    paths:{
        jquery:'./jquery',
        login:'./lib/login',
        md5:'./jquery.md5'
    },
    shim:{
        md5:['jquery']
    }
})

require(['jquery','login'],function($,login){
    login.login('.btn')
})