define(['jquery', 'underscore', 'backbone', 'router'], function($, _, Backbone, router) {

    return {
        initialize: function() {
            Backbone.history.start();
        }
    };

});