var app = angular.module('app', [
    '720kb.datepicker'
]);

app.controller('DatepickerDemoCtrl', function ($scope) {
    $scope.today = new Date();
    $scope.minDate = new Date().toString();
    $scope.open = function () {
        $scope.opened = true;
    }
});