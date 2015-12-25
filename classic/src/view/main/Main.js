/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */

Ext.state.Manager.setProvider(Ext.create('Ext.state.CookieProvider'));

Ext.define('School.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',

        'School.view.main.MainController',
        'School.view.main.MainModel',

        'School.view.main.SchoolTree',
        'School.view.main.SchoolGrid'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    layout: 'border',

    stateId: 'school',
    stateful: true,

    items: [{
        xtype: 'schooltree',
        region: 'west',
        width: 300,
        border: true
    }, {
        xtype: 'schoolgrid',
        region: 'center'
    }]
});
