angular
  .module('mockedBackendWithAngularjsAppDev', ['mockedBackendWithAngularjsApp', 'ngMockE2E'])
  .run(function ($httpBackend) {
    'use strict';
    $httpBackend.whenGET(/^views\//).passThrough();
    $httpBackend.whenGET(/^res\//).passThrough();

    /* backend API calls here */
    $httpBackend.whenPOST(/^\/signup/).respond(200);
    $httpBackend.whenGET(/^\/api\/catalog\/US/).respond(200, TD.catalogUS);
    $httpBackend.whenPOST(/\/api\/\/exception\/(\S)*/).respond({});

  });
if (angular.mock) {
  angular.element(document).ready(function () {
    'use strict';
    angular.bootstrap(document, ['mockedBackendWithAngularjsAppDev']);
  });
}
