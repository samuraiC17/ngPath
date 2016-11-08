'use strict'
eventsApp.controller("CookieStoreSampleController",
    function CookieStoreSampleController($scope, $cookieStore) {
        $scope.event = { id: 1, name: "My Event" };
        $scope.saveEventToCookie = function (event) {
            $cookieStore.put('event', event);
        };
        $scope.getEventToCookie = function () {
            console.log($cookieStore.get('event'));
        };
        $scope.removeEventToCookie = function () {
            $cookieStore.remove('event');
        };
    }
);