$.ajaxPrefilter(function(options) {
    // 更改url
    options.url = 'http://www.liulongbin.top:3007' + options.url;
    // 统一配置 conplete
    options.complete = function(xhr) {
        if (xhr.responseJSON.status === 1) {
            // 删除假token
            localStorage.removeItem('token');
            // 跳转到登录页
            location.href = '/login.html';
        }
    };
    // 统一配置headers
    options.headers = {
        Authorization: localStorage.getItem('token')
    }
})