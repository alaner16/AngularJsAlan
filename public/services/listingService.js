AngularJsApp.factory("listingService", function($http, config){
    return {
        getListing : function(){
            return $http.get(`${config.apiUrl}/Listing`);
        }
    }
})