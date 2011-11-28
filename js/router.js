define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {

    var Router = Backbone.Router.extend({

        routes: {
          '': ''
        }

    });

    return {

        initialize: function() {
            new Router();
            Backbone.history.start();
        }

    };
});