'use strict';

/**
 * @ngdoc function
 * @name mockedBackendWithAngularjsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mockedBackendWithAngularjsApp
 */
angular.module('mockedBackendWithAngularjsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
