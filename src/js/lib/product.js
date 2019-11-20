let baseUrl = 'http://localhost:8080/guomei.com';

define(['jquery'], function ($) {
    return {
        getdata: function () {
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
                            <img src="../${obj[1].src}" alt="${obj[1].title}">
                            <p>${value.title}</p>
                            <p><span>￥</span>${value.price}</p>
                        </a>`;
                    })
                    $('div.right').append(temp);
                }
            })
        }
    }
})