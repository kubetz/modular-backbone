require.config({
    paths: {
        jquery: 'libs/jquery/jquery-1.7.1.min',
        underscore: 'libs/underscore/underscore-1.2.2.min',
        backbone: 'libs/backbone/backbone-0.5.3_optamd3.min',
        text: 'libs/require/text-0.27.0.min',
        templates: '../templates'
    }

});

require(['app'], function(App) {

    App.initialize();

});