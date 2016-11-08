'use strict'

eventsApp.controller('EventController',
    function EventController($scope, eventData, $anchorScroll) {
        $scope.snippet = '<span style="color:red">hi there</span>';
        $scope.boolValue = true;
        $scope.mystyle = { color: 'red' };
        $scope.myclass = 'blue';
        $scope.buttonDisabled = true;
        $scope.sortorder = 'name';
        $scope.event = eventData.getEvent();
        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };
        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };
        $scope.scrollToSession = function() {
            $anchorScroll();
        };
    });
