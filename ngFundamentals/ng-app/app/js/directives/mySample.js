'use strict'

eventsApp.directive('myElement', function ($compile) {
    return {
        restrict: 'E',
        link: function (scope, element, attrs, controller) {
            var markup = "<input type='text' ng-model='sampleDataE' /> {{sampleDataE }} <br />";
            angular.element(element).html($compile(markup)(scope));
        }
    };
});

eventsApp.directive('myAttribute', function ($compile) {
    return {
        link: function (scope, element, attrs, controller) {
            var markup = "<input type='text' ng-model='sampleDataA' /> {{sampleDataA }} <br />";
            angular.element(element).html($compile(markup)(scope));
        }
    };
});

eventsApp.directive('myTemplate', function ($compile) {
    return {
        restrict: 'E',
        template: "<input type='text' ng-model='sampleDataT' /> {{sampleDataT }} <br />",
        scope:{
            
        }
    };
});

eventsApp.directive('myClass', function ($compile) {
    return {
        restrict: 'C',
        template: "<input type='text' ng-model='sampleDataC' /> {{sampleDataC }} <br />"
    };
});

eventsApp.directive('myComment', function ($compile) {
    return {
        restrict: 'M',
        template: "<input type='text' ng-model='sampleDataCmt' /> {{sampleDataCmt }} <br />"
    };
});