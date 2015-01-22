'use strict';

/**
 * @ngdoc function
 * @name woodchuckWebsiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the woodchuckWebsiteApp
 */
angular.module('woodchuckWebsiteApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
