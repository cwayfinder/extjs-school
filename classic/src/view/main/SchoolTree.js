/**
 * This view is an example list of people.
 */
Ext.define('School.view.main.SchoolTree', {
    extend: 'Ext.tree.Panel',
    xtype: 'schooltree',

    requires: [
        'School.store.Schools'
    ],

    title: 'School Tree',

    store: 'schools',

    bind: {
        selection: '{selectedChild}'
    },

    listeners: {
        beforeselect: 'onBeforeChildSelect',
        select: 'onChildSelect'
    }
});
