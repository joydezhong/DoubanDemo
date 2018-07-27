//注入http服务
//新书速递控制器
DoubanApp.controller('NewBooksController', ['$scope', '$http', function ($scope, $http) {
    $scope.pageClass = 'page-home';

    $http.get('/api/books/newBookList').then(function(json){
        var json = json.data;
        if(json.code == 1){
            $scope.NewBookList = json.data;
            $scope.FirstBookTitle = json.data[0].title;
            $scope.FirstBookDescipt = json.data[0].description;
            var author = json.data[0].bookInfo;
            var autorEn = author.match(/](\S*)\//)[1].match(/(\S*)\//)[1];
            var autorCN = author.match(/(\S*)\//)[1].match(/(\S*)\//)[1];
            if(autorEn){
                $scope.FirstBookAuthor = autorEn;
            }else if(autorCN){
                $scope.FirstBookAuthor = autorCN;
            }

            //评分星星


        }else{
            console.log(json.data);
        }
    },function(err){
        console.log(err);
    });

    //渲染完成执行
    // $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent){
    //     console.log('renderFinished');
    // })
}]);

//受关注图书控制器
DoubanApp.controller('FocusBooksController', ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {
    $scope.pageClass = 'page-focusBook';

    //选项卡的切换
    $rootScope.data = {
        current:"1"
    };
    $rootScope.actions = {
        setCurrent:function(param, $event){
            $($event.target).addClass('mdui-tab-active').siblings().removeClass('mdui-tab-active');
            $rootScope.data.current = param;
        }
    };
    //关注虚构
    $http.get('/api/books/focusBookList').then(function(json){
        var json = json.data;
        if(json.code == 1){
            $scope.FocusBookList = json.data;
        }else{
            console.log(json.data);
        }
    },function(err){
        console.log(err);
    });
    //关注非虚构
    $http.get('/api/books/focusNoBookList').then(function(json){
        var json = json.data;
        if(json.code == 1){
            $scope.FocusNoBookList = json.data;
        }else{
            console.log(json.data);
        }
    },function(err){
        console.log(err);
    });
}]);

//图书top250排行
DoubanApp.controller('TopBooksController', ['$scope', '$http', function ($scope, $http) {
    $scope.pageClass = 'page-topBooks';

    //分页
    $scope.count = 0; //总条数
    $scope.p_pernum = 24; //每页个数
    $scope.p_current = 1; //当前页
    $scope.p_all_page = 0; //所有页
    $scope.pages = [];
    $scope.first_id = ""; //查询的第一个_id
    $scope.last_id = ""; //查询的最后一个_id

    $scope.condition = 1; //翻页情况 1下翻 0上翻 -1跳页

    var _get = function(page,size,condition,callback){
        $http.get('/api/books/topBookList?page='+page+'&pageSize='+$scope.p_pernum+'&last_id='+$scope.last_id+'&first_id='+$scope.first_id+'&condition='+condition).then(function(json){
            var json = json.data;
            if(json.code == 1){
                $scope.TopBookList = json.data;
                $scope.FirstBookTitle = json.data[0].title;
                $scope.FirstBookDescipt = json.data[0].description;
                $scope.first_id = json.data[0]._id;
                $scope.last_id = json.data[json.data.length-1]._id;

                $scope.count = json.count;
                $scope.p_current = page;
                $scope.p_all_page = Math.ceil($scope.count/$scope.p_pernum);
                reloadPno();
                callback();
            }else{
                console.log(json.data);
            }
        },function(err){
            console.log(err);
        });
    };

    _get($scope.p_current,$scope.p_pernum,"",function(){});

    // //首页
    // $scope.p_index = function(){
    //     $scope.load_page(1);
    // }
    // //尾页
    // $scope.p_last = function(){
    //     $scope.load_page($scope.p_all_page);
    // }
    //上一页
    $scope.p_prev = function () {
        var page = $(".pagination").find("li.current a").text();//获取当前页数
        var _page = parseInt(page) - 1;
        if (_page >= 1) {
            _get(_page, $scope.p_pernum, 0, function () { });
        }
    }
    //下一页
    $scope.p_next = function () {
        var page = $(".pagination").find("li.current a").text();//获取当前页数
        var _page = parseInt(page) + 1;
        if (_page <= $scope.p_all_page) {
            _get(_page, $scope.p_pernum, 1, function () { });
        }
    }
    //加载某一页
    $scope.load_page = function(page) {
        _get(page, $scope.p_pernum, -1, function () {
        });
    };

    //初始化页码
    var reloadPno = function() {
        $scope.pages = calculateIndexes($scope.p_current, $scope.p_all_page, 8);
    };

    //分页算法
    var calculateIndexes = function (current, length, displayLength) {
        var indexes = [];
        var start = Math.round(current - displayLength / 2);
        var end = Math.round(current + displayLength / 2);
        if (start <= 1) {
            start = 1;
            end = start + displayLength - 1;
            if (end >= length - 1) {
                end = length - 1;
            }
        }
        if (end >= length - 1) {
            end = length;
            start = end - displayLength + 1;
            if (start <= 1) {
                start = 1;
            }
        }
        for (var i = start; i <= end; i++) {
            indexes.push(i);
        }
        return indexes;
    };


//渲染完成执行
    $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent){
        $(".child-box .pag-nav").css('display','block');
        console.log('renderFinished');
    })
}]);

//正在热映控制器
DoubanApp.controller('hotMoviesController', ['$scope', '$http', 'GetCityService', function ($scope, $http, GetCityService) {
    $scope.pageClass = 'page-hotMovies';

    $http.get('/api/movies/hotMovieList').then(function(json){
        var json = json.data;
        if(json.code == 1){
            $scope.NewMovieList = json.data;
        }else{
            console.log(json.data);
        }
    },function(err){
        console.log(err);
    });

    //获取当前城市ip




}]);