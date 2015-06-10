(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

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
                controller: require('./src/js/recipeController'),
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
},{"./src/js/home":2,"./src/js/recipeController":3}],2:[function(require,module,exports){
module.exports = function ($scope, $mdSidenav, $mdMedia){
    $scope.toggleSideNav = function(){
        $mdSidenav('left').toggle();
    };

    $scope.$watch(function(){
        $scope.isVisibleOnCurrentScreenSize = (!$mdMedia("gt-md"));

    })

    $scope.message = "Hello CommonJS World";
};
},{}],3:[function(require,module,exports){
module.exports = function ($scope){
    $scope.recipeList = [{
        title: 'Burger',
        description:'Delicious Burger King burger with veg pattie',
        image: 'images/burger.png'
    },{
        title: 'Pizza',
        description:'Delicious Domino\'s Pizza with 8 options of toppings',
        image: 'images/pizza.png'
    },{
        title: 'Burrito',
        description:'Mixicans are here',
        image: 'images/burrito.png'
    },{
        title: 'Ice Cream',
        description:'Taste buds can\'t resist.',
        image: 'images/icecream.png'
    },{
        title: 'Salad',
        description:'Health is wealth',
        image: 'images/salad.gif'
    },{
        title: 'More',
        description:'Checkout more menu options',
        image: 'images/more.png'
    }];
};
},{}]},{},[1]);
