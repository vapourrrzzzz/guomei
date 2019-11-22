define([],function(){
    return  {
        //找到cookie中的键值
        get: function (key) {
            if (document.cookie) {
                let arr = document.cookie.split('; ');
                for (var i = 0; i < arr.length; i++) {
                    let item = arr[i].split('=');
                    if (item[0] == key) {
                        return item[1];
                    }
                }
            }
            return '';
            //若没找到，则返回空字符串
        },

        set: function (key, value, day) {
            if (day) {
                let d = new Date();
                d.setDate(d.getDate() + day);
                document.cookie=`${key}=${value};expires=${d};path=/`;
            } else {
                document.cookie = `${key}=${value};path=/`;
            }
        },
        remove:function(key){
            this.set(key,'',-1);
        }
    }
})