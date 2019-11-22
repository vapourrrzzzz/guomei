let baseUrl = "http://localhost:8080/guomei.com";

define(['jquery','md5'],function($,md5){
    return {
        login:function(selector){
            $(selector).on('click',function(){
                $.ajax({
                    url:`${baseUrl}/lib/login.php`,
                    type:'post',
                    data:{
                        username:$('#username').val(),
                        password:$.md5($('#password').val())
                    },
                    dataType:'json',
                    success:function(res){
                        if(res.msg==1){
                            alert('登陆成功');
                            $('body').append(`
                                <script>location.href='../html/index.html'</script>
                            `).remove()
                        }else{
                            alert('账号或密码不正确,请重新登陆')
                            $('body').append(`
                            <script>location.reload()</script>
                            `).remove()
                        }
                    },
                })
            })
        }
    }
})