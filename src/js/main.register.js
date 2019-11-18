require.config({
    paths:{
        jquery:"./jquery",
        register:'./lib/register',
        md5:"./jquery.md5",
    },
    shim:{
        md5:['jquery']
    }
});

require(['jquery','register'],function($,register){
    register.register('.reg');
})