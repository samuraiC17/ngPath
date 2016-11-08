'use strict';
eventsApp.controller('CompileSampleController',
    function CompileSampleController($scope, $compile, $parse) {
        $scope.appendDivToElement = function (markup) {
            var fn = $parse('1+2');
            console.log(fn());

            var getter = $parse('event.name');

            var context1 = { event: { name: 'AngularJS Boot Camp' } };
            var context2 = { event: { name: 'CodeCamp' } };

            console.log(getter(context1));
            console.log(getter(context2));

            console.log(getter(context1, context2));

            var setter = getter.assign;
            setter(context2, 'Code Retreat');

            console.log(context2.event.name);

            return $compile(markup)($scope).appendTo(angular.element("#appendHere"));
        }
    });