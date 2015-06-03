module.exports = function ($scope, $mdSidenav, $mdMedia){
    $scope.toggleSideNav = function(){
        $mdSidenav('left').toggle();
    };

    $scope.$watch(function(){
        $scope.isVisibleOnCurrentScreenSize = (!$mdMedia("gt-md"));

    })

    $scope.message = "Hello CommonJS World";
};