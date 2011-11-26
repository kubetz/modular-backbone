define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {

    var AppRouter = Backbone.Router.extend({

        routes: {
          '': ''
        }

    });

    return {

        initialize: function() {
            var app_router = new AppRouter();

            Backbone.history.start();
        }

    };
});