eventsApp.factory('eventData', function ($resource) {
    var resource = $resource('/data/event/1', { id: '@id' },
        { "getAll": { methode: "GET", isArray: true, params: { something: "foo" } } });
    return {
        getEvent: function () {
            return resource.get({ id: 1 });
        },
        save: function (event) {
            event.id = 999;
            return resource.save(event);
        }

    };
});  