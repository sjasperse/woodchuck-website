'use strict';

/**
 * @ngdoc overview
 * @name woodchuckWebsiteApp
 * @description
 * # woodchuckWebsiteApp
 *
 * Main module of the application.
 */
angular
  .module('woodchuckWebsiteApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
