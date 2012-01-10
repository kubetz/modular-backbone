({
    appDir : '../',
    baseUrl : 'js',
    dir : '../../release',
    paths: {
        jquery:         'libs/jquery/jquery',
        underscore:     'libs/underscore/underscore',
        backbone:       'libs/backbone/backbone',
        text:           'libs/require/text',
        json2:          'libs/json/json2',
        templates:      '../templates'
    },
    optimize: 'uglify',
    modules: [
        {
            name: 'main',
            exclude: ['jquery', 'underscore', 'backbone', 'text', 'json2']
        }
    ]
})