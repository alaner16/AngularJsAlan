var AngularJsApp = angular.module("AngularJsApp", []);
AngularJsApp.constant('config', {
    apiUrl: 'https://webapi20220521235347.azurewebsites.net'
});
AngularJsApp.controller("listingController", async function($scope, listingService, $http){
    $scope.landscape = false;
    listingService.getListing().then(response => {
        $scope.CompanyListAll = response.data;
        $scope.CompanyListAll.forEach(obj => {
            obj.Image = obj.image_List ? obj.image_List.split("|")[0] : null;
        });
        $scope.CompanyList = $scope.CompanyListAll.slice(0, 30);
    }, (error) => {
        $scope.CompanyListAll = [];
        alert("Backend error.");
        console.log(error);
    });
    $scope.lazyLoad = function () {
        $scope.CompanyList = $scope.CompanyList.concat($scope.CompanyListAll.slice($scope.CompanyList.length, $scope.CompanyList.length + 30));
    };
    $scope.returnCompanys = function(){
        return $scope.CompanyList;
    };
});