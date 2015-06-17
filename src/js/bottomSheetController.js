module.exports = function($scope, $mdToast){
    $scope.showToast = function(msg){
        $mdToast.show($mdToast.simple()
                .content(msg)
                .position('top right')
        );
    };
}