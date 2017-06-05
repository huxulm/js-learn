/**
 * Created by xulingming on 2017/3/16.
 */
'user strict';
angular.module('App', [])
    .factory()
.directive('exampleDirective', function () {

    var directiveDefinitionObject = {
        priority: 0,
        template: '<button ng-click="showMsg()"><span>{{personName}} -- {{personAge}}</span></button>', // or // function(tElement, tAttrs) { ... },
        // or
        // templateUrl: 'directive.html', // or // function(tElement, tAttrs) { ... },
        transclude: false,
        restrict: 'E',
        templateNamespace: 'html',
        scope: {
            personName: '@personName',
            personAge: '@personAge',
        },
        controller: function($scope, $element, $attrs, $transclude, $window) {
            console.dir($scope || {});

            this.showMsg = function () {

                $window.alert("Message.");
            }
        },
        // controllerAs: 'stringIdentifier',
        bindToController: false,
        //require: 'siblingDirectiveName', // or // ['^parentDirectiveName', '?optionalDirectiveName', '?^optionalParent'],
        multiElement: false,
        compile: function compile(tElement, tAttrs, transclude) {
            return {
                pre: function preLink(scope, iElement, iAttrs, controller) {
                    console.dir(scope || {});
                },
                post: function postLink(scope, iElement, iAttrs, controller) {
                    console.dir(scope || {});
                }
            };
            // or
            // return function postLink( ... ) { ... }
        }
        // or
        // link: {
        //  pre: function preLink(scope, iElement, iAttrs, controller) { ... },
        //  post: function postLink(scope, iElement, iAttrs, controller) { ... }
        // }
        // or
        // link: function postLink( ... ) { ... }
    };
    return directiveDefinitionObject;
});