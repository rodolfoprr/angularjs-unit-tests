(function () {
  'use strict';

  angular
    .module('app.my-module')
    .run(appRun);

  function appRun(routehelper) {
    routehelper.configureRoutes(getRoutes());
  }

  function getRoutes() {
    return [
      {
        url: '/',
        config: {
          templateUrl: 'app/my-module/index.html',
          controller: 'Index',
          controllerAs: 'vm',
          title: 'Inicial'
        }
      },
      {
        url: '/filter.html',
        config: {
          templateUrl: 'app/my-module/filter.html',
          controller: 'Filter',
          controllerAs: 'vm',
          title: 'Filtro'
        }
      }
    ];
  }
}());
