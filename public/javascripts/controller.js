//注入http服务
DoubanApp.controller('NewBooksController', ['$scope', '$http', function ($scope, $http) {
    $scope.pageClass = 'page-home';

    $http.get('/api/books/newbooklist').then(function(json){
        var json = json.data;
        if(json.code == 1){
            $scope.NewBookList = json.data;
        }else{
            console.log(json.data);
        }
    },function(err){
        console.log(err);
    });

}]);
