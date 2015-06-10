
angular.module('VenCKi-Angular-Material', ["ngMaterial", "ui.router", "ngMdIcons"])
    .config(function($stateProvider, $urlRouterProvider, $mdThemingProvider){
        $stateProvider
            .state('home', {
                url:'/home',
                controller: require('./src/js/home'),
                templateUrl: 'src/templates/home.html'
            })
            .state('home.recipeList', {
                url:'/recipes',
                templateUrl:'src/templates/recipeList.html'
            })
            .state('home.techStack', {
                url:'/techStack',
                templateUrl:'src/templates/techStack.html'
            })
            .state('home.about', {
                url:'/about',
                templateUrl:'src/templates/about.html'
            });

/*        $mdThemingProvider.theme('default')
            .backgroundPalette('lime');*/

        $mdThemingProvider.theme('custom')
            .primaryPalette('pink')
            .accentPalette('orange')
            .backgroundPalette('light-blue');

        $urlRouterProvider.otherwise('/home/recipes');
    })
;