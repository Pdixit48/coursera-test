(funnction(){
  'use strict';
  angular.module('myFirstApp',[])
  .controller('myFirstController',Dowork);

  Dowork.$inject = ['$scope'];
  funnction Dowork($scope){
    $scope.name = "pankaj";
    $scope.enteredText = "";
  }
}) ();
