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
    }],

    getState: function () {
        return {
            'selectedChildId': this.getSelectedChildId(),
            'getSelectedLessonIds': this.getSelectedLessonIds()
        }
    },

    applyState: function (state) {
        this.selectChildById(state.selectedChildId);
        this.selectLessonsByIds(state.getSelectedLessonIds);
    },

    getSelectedChildId: function () {
        var selectedChildId;
        var treeSelection = this.down('schooltree').getSelectionModel().getSelection();
        if (treeSelection.length) {
            selectedChildId = treeSelection[0].data.id;
        }
        return selectedChildId;
    },

    getSelectedLessonIds: function () {
        var selectedChildIds = [];
        var selection = this.down('schoolgrid').getSelectionModel().getSelection();
        if (selection.length) {
            selection.map(function(lesson) {
                selectedChildIds.push(lesson.get('id'));
            });
        }
        return selectedChildIds;
    },

    selectChildById: function (childId) {
        var store = Ext.data.StoreManager.lookup('schools');

        var index = store.findBy(function (record, id) {
            return record.get('mtype') === 'Child' && id === childId;
        });
        var record = store.getAt(index);
        this.down('schooltree').getSelectionModel().select(record);
    },

    selectLessonsByIds: function (lessonIds) {
        if (lessonIds) {
            var store = Ext.data.StoreManager.lookup('lessons');

            var selection = store.getRange().filter(function (record) {
                return lessonIds.indexOf(record.get('id')) >= 0;
            });
            this.down('schoolgrid').getSelectionModel().select(selection);
        }
    }
});
