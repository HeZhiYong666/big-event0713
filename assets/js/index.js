//-----------------------获取用户的信息,把信息渲染到页面中---------------------------
function getUserInfo() {
    $.ajax({
        url: 'http://www.liulongbin.top:3007/my/userinfo',
        success: function(res) {
            console.log(res);
            // 1.设置欢迎语
            // 有昵称,优先使用昵称 没用昵称用账号
            var name = res.data.nickname || res.data.username;
            $('.uesrname').html('&nbsp;&nbsp' + name);
            // 2.设置头像
            // 有图片类型的头像,那么就使用图片;没用图片,使用name的第一个字符
            if (res.data.user_pic) {
                // 说明有图片
                $('.layui-nav-img').attr('src', res.data.user_pic).show();
                $('.text-avatar').hide();
            } else {
                // 说明没有图片
                // 截取第一个字符,转大写 中文也不会报错
                var firstWord = name.substr(0, 1).toUpperCase();
                $('.text-avatar').text(firstWord).css('display', 'inline-block');
                $('.layui-nav-img').hide();
            }
        },
        headers: {
            Authorization: localStorage.getItem('token')
        }
    });
};
getUserInfo();