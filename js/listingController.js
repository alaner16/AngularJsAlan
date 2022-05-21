var AngularJsApp = angular.module("AngularJsApp", []);
AngularJsApp.controller("listingController", function($scope, listingService){
    $scope.CompanyListAll = JSON.parse(listingService.getListing());
    $scope.CompanyListAll.forEach(obj => {
        obj.Image = obj.image_List ? obj.image_List.split("|")[0] : null;
    });
    $scope.landscape = false;
    $scope.CompanyList = $scope.CompanyListAll.slice(0, 30);
    $scope.landscapeButton = function(){
        $scope.landscape = !$scope.landscape;
    }; 
    $scope.lazyLoad = function () {
        $scope.CompanyList = $scope.CompanyList.concat($scope.CompanyListAll.slice($scope.CompanyList.length, $scope.CompanyList.length + 30));
    };
    $scope.returnCompanys = function(){
        return $scope.CompanyList;
    };
})