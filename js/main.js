require.config({
    paths: {
        jquery: 'libs/jquery/jquery',
        underscore: 'libs/underscore/underscore',
        backbone: 'libs/backbone/backbone',
        text: 'libs/require/text',
        templates: '../templates'
    }

});

require(['app'], function(App) {

    App.initialize();

});