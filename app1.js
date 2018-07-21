(function () {
'use strict';

angular.module('name calculator', [])

.controller('namecalculatorcontroller', function ($scope) {
$scope.name = "";
$scope.totalvalue = 0;

$scope.displaynumeric = function () {
  var totalnamevalue =
  calculatenumericforstring($scope.name); //get the total value
  $scope.totalvalue = totalnamevalue;
};

function calculatenumericforstring(string) {
  var totalstringvalue = 0;
  for (var i = 0; i < string.length; i++) {
    totalstringvalue += string.charcodeat(i);
 }
 return totalstringvalue;
}
});
}) ();
