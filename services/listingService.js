AngularJsApp.factory("listingService", function($http){
    return {
        getListing : function(){
            return $http.get('https://localhost:7024/Listing');
        }
    }
})