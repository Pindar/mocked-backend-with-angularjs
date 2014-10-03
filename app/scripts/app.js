'use strict';

/**
 * @ngdoc bootstrap
 * @name mockedBackendWithAngularjsApp
 *
 */
(function () {

  if (!angular.mock) {
    angular.element(document).ready(function () {
      angular.bootstrap(document, ['mockedBackendWithAngularjsApp']);
    });
  }
})();

/**
 * @ngdoc overview
 * @name mockedBackendWithAngularjsApp
 * @description
 * # mockedBackendWithAngularjsApp
 *
 * Main module of the application.
 */
angular
  .module('mockedBackendWithAngularjsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
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
