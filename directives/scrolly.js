// var AngularJsApp = angular.module("AngularJsApp", []);
AngularJsApp.directive('scrolly', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var raw = element[0];
                
            element.bind('scroll', function () {
                if (scope.landscape){
                    console.log(raw.scrollWidth + raw.offsetWidth > raw.scrollWidth);
                    if (raw.scrollLeft + raw.offsetWidth > raw.scrollWidth) {
                        scope.$apply(attrs.scrolly);
                    }
                }else{
                    if (raw.scrollTop + raw.offsetHeight > raw.scrollHeight) {
                        scope.$apply(attrs.scrolly);
                    }
                }
            });
        }
    };
});