let baseUrl = 'http://localhost:8080/guomei.com';
define(['jquery',], function ($) {
    return {
        getdata: function (callback) {
            let id=location.search.split('=')[1];
            $.ajax({
                url: `${baseUrl}/lib/product.php`,
                type: 'post',
                dataType: 'json',
                success: function (res) {
                    res=res[id-1]
                    callback&&callback(res);
                }
            })
        },
        detail: function (res) {
            var movebox = $('.movebox'),
                bigpic = $('.bigpic'),
                small = $('.small'),
                big = $('.big');

            small.on('mouseover', function () {
                movebox.addClass('show');
                big.addClass('show');

                small.on('mousemove', function (ev) {
                    var top = ev.pageY - small.offset().top - movebox.height() / 2;
                    var left = ev.pageX - small.offset().left - movebox.width() / 2;

                    movebox.css({
                        'width': small.width() * big.width() / bigpic.width(),
                        'height': small.height() * big.height() / bigpic.height()
                    })

                    var rate = bigpic.width() / small.width();

                    if (left <= 0) {
                        left = 0;
                    } else if (left > small.width() - movebox.width() - 2 * parseInt(movebox.css('border-left-width'))) {
                        left = small.width() - movebox.width() - 2 * parseInt(movebox.css('border-left-width'));
                    }
                    if (top <= 0) {
                        top = 0;
                    } else if (top > small.height() - movebox.height() - 2 * parseInt(movebox.css('border-top-width'))) {
                        top = small.height() - movebox.height() - 2 * parseInt(movebox.css('border-top-width'));
                    }
                    movebox.css({
                        left: left + 'px',
                        top: top + 'px'
                    })

                    bigpic.css({
                        left: -left * rate,
                        top: -top * rate
                    })
                })
            })
            small.on('mouseout', function () {
                movebox.removeClass('show');
                big.removeClass('show');
            })
        },
        change:function(res,callback){
            pic=JSON.parse(res.pic)
            $('.fdj').html(`
            <div class="fdj_left">
            <div class="scale">
                <div class="small">
                    <img src="${baseUrl}/src/${pic[0].src}" alt="${pic[0].title}" class="smallpic" width="450px">
                    <div class="movebox"></div>
                </div>
                <div class="big">
                    <img src="${baseUrl}/src/${pic[0].src}" alt="" class="bigpic">
                </div>
            </div>
            <ul class="list">
                <li>
                    <img src="${baseUrl}/src/${pic[0].src}" alt="" width="54px">
                </li>
                <li>
                    <img src="${baseUrl}/src/${pic[1].src}" alt="" width="54px" >
                </li>
                <li>
                    <img src="${baseUrl}/src/${pic[2].src}" alt="" width="54px">
                </li>
                <li>
                    <img src="${baseUrl}/src/${pic[3].src}" alt="" width="54px">
                </li>
            </ul>
        </div>
        <div class="fdj_right">
            <h2>${res.title}</h2>
            <h3>${res.detail}</h3>
            <p>国美价：<span>￥</span><span>${res.price}</span><a href="">降价通知</a></p>
            <p>剩余库存：<em>${res.num}</em></p>
            <p>服务：<b>由国美配送并提供保障监管</b></p>
            <p> 购买数量： <input type="number" value="1" min="1" max="${res.num}"></p>
            <button class="add">加入购物车</button>
        </div>
            `)
            $('.list>li').on('mouseover', function () {
                $(this).css({
                    'border-color': 'red'
                }).siblings().css({
                    'border-color': 'transparent'
                })
                let index=$(this).index()
                $('.scale').html(`
                    <div class="small">
                        <img src="${baseUrl}/src/${pic[index].src}" alt="" class="smallpic" width="450px">
                        <div class="movebox"></div>
                    </div>
                    <div class="big">
                        <img src="${baseUrl}/src/${pic[index].src}" alt="" class="bigpic">
                    </div>
                `)
                callback&&callback()
            })
            callback&&callback()
        }
    }
});