(function() {
'use strict';

angular.module('public')
.config(routeConfig);

routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      absract: true,
      templateUrl: 'src/templates/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/templates/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/templates/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/templates/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    })
    .state('public.signup', {
      url: '/signup',
      templateUrl: 'src/templates/signup.html',
      controller: 'RegistrationController',
      controllerAs: 'reg',
    })
    .state('public.info', {
      url: '/info',
      templateUrl: 'src/templates/info.html',
      controller: 'InfoController',
      controllerAs: 'info',
    });
}
})();
