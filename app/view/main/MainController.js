/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('School.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onBeforeChildSelect: function (tree, record, index) {
        if (record.data.mtype !== 'Child') {
            return false;
        }
    },

    onChildSelect: function (tree, record, index) {
        var store = Ext.data.StoreManager.lookup('lessons');

        if (record) {
            store.filter('childId', record.get('id'));
        } else {
            store.clearFilter();
        }

        this.view.saveState();
    },

    onSelectAllLessons: function () {
        this.view.down('gridpanel').getSelectionModel().selectAll();
    },

    onDeselectAllLessons: function () {
        this.view.down('gridpanel').getSelectionModel().deselectAll();
    },

    onInvertLessonsSelection: function () {
        var grid = this.view.down('gridpanel');
        var selectionModel = grid.getSelectionModel();
        var selection = selectionModel.getSelection();

        selectionModel.deselect(selection);
        selectionModel.select(Ext.Array.difference(grid.store.getRange(), selection));
    }
});
