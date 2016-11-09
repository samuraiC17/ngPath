'use strict';

var eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngResource', 'ngCookies', 'ngRoute'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/newEvent', {
            templateUrl: 'templates/NewEvent.html',
            controller: 'EditEventController'
        });

        $routeProvider.when('/events',
            {
                templateUrl: 'templates/EventList.html',
                controller: 'EventListController'
            });
        $routeProvider.when('/event/:eventId',
            {
                foo: 'bar',
                templateUrl: 'templates/EventDetails.html',
                controller: 'EventController'
            });

            $routeProvider.when('/sampleDirective',
            {
                foo: 'bar',
                templateUrl: 'templates/SampleDirective.html',
                controller: 'SampleDirectiveController'
            });

            $routeProvider.when('/profile/edit',
            {
                templateUrl: 'templates/EditProfile.html',
                controller: 'EditProfileController'
            });

        $routeProvider.otherwise({ redirectTo: '/events' });
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });
    // .factory('myCache', function($cacheFactory) {
    //     return $cacheFactory('myCache', { capacity: 3 })
    // });
