'use strict';

/**
 * @ngdoc function
 * @name woodchuckWebsiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the woodchuckWebsiteApp
 */
angular.module('woodchuckWebsiteApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
