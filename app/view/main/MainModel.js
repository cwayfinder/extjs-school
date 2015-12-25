/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('School.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {},

    formulas: {
        selectedChild: function (get) {
            var store = Ext.data.StoreManager.lookup('schools');
            return store.findRecord('mtype', 'Child');
        }
    }
});
