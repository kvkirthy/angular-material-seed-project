
angular.module('VenCKi-Angular-Material', ["ngMaterial", "ui.router", "ngMdIcons"])
    .config(function($stateProvider, $urlRouterProvider, $mdThemingProvider){
        $stateProvider.state('home', {
            url:'/home',
            controller: require('./src/js/home'),
            templateUrl: 'src/templates/home.html'
        });

        $mdThemingProvider.theme('custom')
            .primaryPalette('pink')
            .accentPalette('orange')
            .backgroundPalette('light-blue');

        $urlRouterProvider.otherwise('/home');
    })
;