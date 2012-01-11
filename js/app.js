define(['jquery', 'underscore', 'backbone', 'router'], function($, _, Backbone, Router) {

    // application namespace
    window.App = window.App || {
        router: new Router()
    };
    
    return {
        initialize: function() {
            Backbone.history.start();
        }
    };
    
});