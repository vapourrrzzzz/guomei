/**
 * 
 */
(function ($) {
    $.fn.extend({
        tabs: function (options) {
            defaults = {
                event: 'click',
                content: 'show',
                btn: 'actived'
            }
            $.extend(defaults, options);
            var oBtn = this.children('ul').children('li');
            var oDiv = this.children('div')
            oBtn.on(defaults.event, function () {
                var index = oBtn.index(this);
                $(this).addClass(defaults.btn).siblings().removeClass(defaults.btn);
                oDiv.eq(index).addClass(defaults.content).siblings().removeClass(defaults.content)
            })
        }
    })
})(jQuery)