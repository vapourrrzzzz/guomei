let baseUrl = 'http://localhost:8080/guomei.com';

define(['jquery'], function ($) {
    return {
        getdata: function (callback) {
            $.ajax({
                url: `${baseUrl}/lib/product.php`,
                type: 'post',
                dataType: 'json',
                success: function (res) {
                    let temp = '';
                    res.forEach(function (value, index) {
                        var obj=JSON.parse(value.pic);
                        temp += `
                        <a href="${baseUrl}/src/html/detail.html?id=${value.id}">
                            <img class="lazy" data-original="../${obj[1].src}">

                            <p>${value.title}</p>
                            <p><span>￥</span>${value.price}</p>
                        </a>`;
                    })
                    $('div.right').append(temp);
                    $(function() {
                        $("img.lazy").lazyload({effect: "fadeIn"});
                    });
                }
            })
 
            callback&&callback()
        }
    }
})