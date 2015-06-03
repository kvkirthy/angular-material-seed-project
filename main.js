
angular.module('VenCKi-Angular-Material', ["ngMaterial", "ui.router", "ngMdIcons"])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider.state('home', {
            url:'/home',
            controller: require('./src/js/home'),
            templateUrl: 'src/templates/home.html'
        });

        $urlRouterProvider.otherwise('/home');
    })
;