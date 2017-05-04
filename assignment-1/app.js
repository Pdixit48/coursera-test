(function () {
'use strict';
angular.module('mod', [])
.controller('LunchCheckController', fun1);
fun1.$inject = ['$scope'];
function fun1 ($scope) {
  $scope.name = "";
  $scope.enteredText="";
  console.log($scope.enteredText);
 $scope.checkWordsCount = function()
 {
 var separator =',';
 var arrayOfStrings = $scope.enteredText.split(separator);

   console.log('The original string is: "' + $scope.enteredText + '"');
   console.log('The separator is: "' + separator + '"');
   console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(' / '));
   if(arrayOfStrings.length > 3 && $scope.enteredText != ""){
     $scope.enteredText = "Too much!";
   }
   else if ($scope.enteredText == "") {
     $scope.enteredText = "Empty";
   }
   else{
     $scope.enteredText = "Enjoy!";
   }
 }
};
})();
