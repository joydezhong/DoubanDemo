//注入http服务
//新书速递控制器
DoubanApp.controller('NewBooksController', ['$scope', '$http', function ($scope, $http) {
    $scope.pageClass = 'page-home';

    $http.get('/api/books/newbooklist').then(function(json){
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
    $http.get('/api/books/focusbooklist').then(function(json){
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
    $http.get('/api/books/focusnobooklist').then(function(json){
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

    $http.get('/api/books/topbooklist').then(function(json){
        var json = json.data;
        if(json.code == 1){
            $scope.TopBookList = json.data;
            $scope.FirstBookTitle = json.data[0].title;
            $scope.FirstBookDescipt = json.data[0].description;
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