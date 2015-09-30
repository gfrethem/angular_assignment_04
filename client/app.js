/**
 * Created by gfrethem on 9/29/15.
 */
var app = angular.module('twitterGenerator', []);

app.controller('MainController', ['$scope', '$http', function($scope, $http) {

$scope.adjsList = [];
$scope.nounList = [];
$scope.handleList = [];

    $http({
        method: 'GET',
        url: '/getNouns'
    }).then(function (response) {
       $scope.nounList = response.data;
    });

    $http({
        method: 'GET',
        url: '/getAdjs'
    }).then(function (response) {
       $scope.adjsList = response.data;
    });


    var randomNumber = function(min, max) {
        return Math.floor(Math.random() * (1 + max - min) + min);
    };

    function generateHandle() {
        $scope.handle = $scope.adjsList[randomNumber(0, $scope.adjsList.length-1)] + $scope.nounList[randomNumber(0, $scope.nounList.length-1)];
        return $scope.handle;
    }


    $scope.kickOff = function(num) {
        console.log('Kicked');
        $scope.handleList = [];
        for (var i = 0; i < num; i++) {
            $scope.handleList.push(generateHandle());
            //console.log(handleList);
        }
        return $scope.handleList;
    };





}]);