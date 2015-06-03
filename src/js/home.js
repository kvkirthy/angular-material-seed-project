module.exports = function ($scope, $mdSidenav){
    $scope.toggleSideNav = function(){
        $mdSidenav('left').toggle();
    };

    $scope.message = "Hello CommonJS World";
};