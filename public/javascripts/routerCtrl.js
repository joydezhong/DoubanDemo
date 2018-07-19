//    ng 路由和控制器配置
var DoubanApp = angular.module('DoubanApp', ['ngRoute']);
DoubanApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: '/view/newBooks.ejs',
            controller: 'NewBooksController'
        })
        .when('/focusBooks', {
            templateUrl: '/view/focusBooks.ejs',
        })
        .otherwise({
           redirectTo: '/home'
        });
}]).run(['$rootScope', '$location', function($rootScope, $location) {
    /* 监听路由的状态变化 保存记录至session 获取切换页面的类别 以供搜索使用*/
    $rootScope.$on('$routeChangeStart', function(evt, next, current){
        console.log('route begin change');
    });
    $rootScope.$on('$routeChangeSuccess', function(evt, current, previous) {
        console.log('route have already changed ：'+$location.path());
    });
}])
