/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('School.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'School.view.main.MainController',
        'School.view.main.MainModel'
    ],

    controller: 'main',
    viewModel: 'main',

    html: 'Not implemented yet'
});
