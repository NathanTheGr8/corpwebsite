 var app = angular.module("kovetabs", []);
app.controller('TabController', function($scope, $window){
    $scope.tab = 0;

    $scope.setTab = function(newValue){
        $scope.tab = newValue;
    };

    $scope.isSet = function(tabName){
        return $scope.tab === tabName;
    };


    $scope.tabsm = 0;

    $scope.setTabsm = function(newValue){
        $scope.tabsm = newValue;
    };

    $scope.isSetsm = function(tabName){
        return $scope.tabsm === tabName;
    };


});
