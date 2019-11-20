require.config({
    paths:{
        jquery:'./jquery',
        detail:'./lib/detail'
    },
    shim:{}
})

require(['jquery','detail'],function($,detail){
    detail.getdata(function(res){
        detail.change(res,function(){
            detail.detail()
        });
        $('.add').on('click',function(){
            alert(1)
        })
    })
})