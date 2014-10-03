'use strict';

/**
 * @ngdoc function
 * @name mockedBackendWithAngularjsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mockedBackendWithAngularjsApp
 */
angular.module('mockedBackendWithAngularjsApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('/api/catalog/US').success(function (data) {
      $scope.key = data.key;
    });
  });
