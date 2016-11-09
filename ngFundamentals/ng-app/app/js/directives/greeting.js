'use strict'

eventsApp.controller('GreetingController', function ($scope) {
    var greetings = ['hello'];
    $scope.sayHello = function () {
        alert(greetings.join());
    }
    this.addGreeting = function (greeting) {
        greetings.push(greeting);
        console.log(greeting);
    }
})

eventsApp
    .directive('greeting', function () {
        return {
            restrict: 'E',
            replace: true,
            transclude:true,
            priority: 1,
            template: "<div><button class='btn' ng-click='sayHello()'>Say Hello</button><div ng-transclude></div></div>",
            controller: '@',
        };
    })
    .directive('finnish', function () {
        return {
            restrict: 'A',
            require: '^greeting',
            priority: 1,
            link: function (scope, element, attrs, controller) {
                controller.addGreeting('hei');
            }
        }
    })
    .directive('hindi', function () {
        return {
            restrict: 'A',
            require: '^greeting',
            priority: 2,
            link: function (scope, element, attrs, controller) {
                controller.addGreeting('नमस्ते');
            }
        }
    });