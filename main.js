var angular = require('angular');
var ngMaterialModule = require('angular-material');
var uiRouterModule = require('angular-ui-router');
require('angular-material-icons');


angular.module('VenCKi-Angular-Material', [ngMaterialModule, uiRouterModule, "ngMdIcons"])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider.state('home', {
            url:'/home',
            controller: require('./src/js/home'),
            templateUrl: 'src/templates/home.html'
        });

        $urlRouterProvider.otherwise('/home');
    })
;