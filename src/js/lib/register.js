let baseUrl = "http://localhost:8080/guomei.com";

define(['jquery','md5'], function ($,md5) {
    return {
        register: function (selector) {
            $(selector).on('click', function () {
                $.ajax({
                    url: `${baseUrl}/lib/register.php`,
                    type: 'post',
                    data: {
                        username: $('#username').val(),
                        password: $.md5($('#password').val()),
                        email: $('#email').val(),
                        phone: $('#phone').val()
                    },
                    dataType:'json',
                    success: function (res) {
                       if(res.msg==1){
                           alert('注册成功');
                           $('body').append(`
                                <script>location.href='http://localhost:8080/guomei.com/src/html/login.html'</script>
                           `).remove()
                       }else{
                           alert('用户名已存在,请重新注册');
                           $('body').append(`
                           <script>location.reload()</script>
                      `).remove()
                       }
                    }
                })
            })
        }
    }
})