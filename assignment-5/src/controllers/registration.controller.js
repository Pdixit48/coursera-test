(function () {



angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['$scope','MenuService','ApiPath'];

function RegistrationController($scope,MenuService, ApiPath) {
  var reg = this;
  reg.basePath=ApiPath;
  reg.data=[];

  // ng-blur function start
    reg.favdishCheck = function(){
      reg.user.error=false;
      reg.user.saveMsg = false;
      var promise = MenuService.getFavDish(reg.user.favdish);
      promise.then(function (response) {
        reg.data = response.data;

        MenuService.savePref(reg);
        reg.user.saveMsg=true;

      })
      .catch(function (error) {
        console.log(error);
        reg.user.error=true;
     })
   };
  //ng-blur function end


  reg.submit = function () {
    reg.user.error=false;
    reg.user.saveMsg = false;
    var promise = MenuService.getFavDish(reg.user.favdish);
    promise.then(function (response) {
      reg.data = response.data;
      reg.completed = true;

      MenuService.savePref(reg);
      reg.user.saveMsg=true;

    })
    .catch(function (error) {
      console.log(error);
      reg.user.error=true;
      reg.completed = false;
   })
  };
}

})();
