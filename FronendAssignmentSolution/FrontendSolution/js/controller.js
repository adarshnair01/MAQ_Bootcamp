var reportingApp = angular.module("Report",[]).constant("baseURL","http://localhost:3000/");

reportingApp.controller("ReportController",["$scope","$http","baseURL", function($scope,$http,baseURL){
$scope.Grid = function(){
      $http({
        method : "GET",
        url : baseURL + "Grid"
    }).then(function mySucces(response) {
        $scope.CountTileTitle = response.data[0].name;
        $scope.DescriptionTileTitle =response.data[1].name;
        $scope.IDTileTitle =response.data[2].name;
        $scope.MetricTileTitle =response.data[3].name;

        $scope.CountTileData =response.data[0].value;
        $scope.DescriptionTileData = response.data[1].value;
        $scope.IDTileData = response.data[2].value;
        $scope.MetricTileData = response.data[3].value;

    }, function myError(response) {
        $scope.error = response.statusText;
    });
};
$scope.Graph = function(){
   $http({
        method : "GET",
        url : baseURL + "Graph"
    }).then(function mySucces(response) {
        $scope.CountTileTitle = response.data[0].name;
        $scope.DescriptionTileTitle =response.data[1].name;
        $scope.IDTileTitle =response.data[2].name;
        $scope.MetricTileTitle =response.data[3].name;

        $scope.CountTileData =response.data[0].value;
        $scope.DescriptionTileData = response.data[1].value;
        $scope.IDTileData = response.data[2].value;
        $scope.MetricTileData = response.data[3].value;

    }, function myError(response) {
        $scope.error = response.statusText;
    });
};
}]);