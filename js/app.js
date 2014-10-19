var app = angular.module("kovetabs", []);
app.controller('TabController', function($scope, $window){
    $scope.tab = 0;

    $scope.setTab = function(newValue){
        $scope.tab = newValue;
    };

    $scope.isSet = function(tabName){
        return $scope.tab === tabName;
    };


});
