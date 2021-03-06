//    ng 路由和控制器配置
var DoubanApp = angular.module('DoubanApp', ['ngRoute']);


//获取当前城市的factory
DoubanApp.factory('GetCityService',function($http){
   var GetCityService = {};
   //获取当前城市ip
   var req = {
       method: 'GET',
       url: 'https://ipapi.co/json/',
       headers: {
           'Content-Type': 'text/html'
       },
       data: {}
   }
   // return {
    GetCityService.getCityIP = function(){
           return $http(req).then(function(json){
               return json.data.ip;
           })
       }
   // };

   return GetCityService;

});

//自定义自定和模板（登录注册对话框）
DoubanApp.directive("formDialog", function(){
    return {
        templateUrl: "template/dialog.ejs",
        restrict: "C",
        compile: function(){
            console.log("directive render success!");
        }
    }
});

//渲染完成
DoubanApp.directive('onFinishRender', function($timeout){
    return{
        restrict: 'A',
        link: function(scope, element, attr){
            if(scope.$last === true){
                $timeout(function(){
                    scope.$emit('ngRepeatFinished');
                })
            }
        },
    }
});

//路由控制
DoubanApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: '/view/newBooks.ejs',
            controller: 'NewBooksController'
        })
        .when('/focusBooks', {
            templateUrl: '/view/focusBooks.ejs',
            controller: 'FocusBooksController'
        })
        .when('/topBooks', {
            templateUrl: '/view/topBooks.ejs',
            controller: 'TopBooksController'
        })
        .when('/hotMovies', {
            templateUrl: '/view/hotMovies.ejs',
            controller: 'hotMoviesController'
        })
        .when('/willMovies', {
            templateUrl: '/view/willMovies.ejs',
            controller: 'willMoviesController'
        })
        .when('/topMovies', {
            templateUrl: '/view/topMovies.ejs',
            controller: 'topMoviesController'
        })
        .when('/weekMovies', {
            templateUrl: '/view/weekMovies.ejs',
            controller: 'weekMoviesController'
        })
        .when('/usaMovies', {
            templateUrl: '/view/usaMovies.ejs',
            controller: 'usaMoviesController'
        })
        .when('/dayMusics', {
            templateUrl: '/view/dayMusics.ejs',
            controller: 'dayMusicController'
        })
        .when('/newMusics', {
            templateUrl: '/view/newMusics.ejs',
            controller: 'newMusicController'
        })
        .when('/hotMusics', {
            templateUrl: '/view/hotMusics.ejs',
            controller: 'hotMusicController'
        })
        .when('/hotActives', {
            templateUrl: '/view/hotActives.ejs',
            controller: 'hotActiveController'
        })
        .when('/bookDetails', {
            templateUrl: '/view/bookDetails.ejs',
            controller: 'bookDetailController'
        })
        .when('/movieDetails', {
            templateUrl: '/view/movieDetails.ejs',
            controller: 'movieDetailController'
        })
        .otherwise({
           redirectTo: '/'
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
