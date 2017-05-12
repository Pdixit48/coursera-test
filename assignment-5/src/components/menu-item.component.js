(function () {
"use strict";

angular.module('public')
.component('menuItem', {
  templateUrl: 'src/templates/menu-item.html',
  bindings: {
    menuItem: '<'
  },
  controller: MenuItemController
});
MenuItemController.$inject = ['ApiPath'];
function MenuItemController(ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
}
})();
