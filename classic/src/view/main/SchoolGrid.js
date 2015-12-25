/**
 * This view is an example list of people.
 */
Ext.define('School.view.main.SchoolGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'schoolgrid',

    requires: [
        'School.store.Lessons'
    ],

    title: 'Child Lessons',
    emptyText: 'No lessons for the selected child',

    store: 'lessons',

    selModel: {
        mode: 'MULTI',
        stateId: 'schoolgridselection',
        stateful: true
    },

    columns: [
        {text: 'Lesson', dataIndex: 'lesson', flex: 1},
        {text: 'Score', dataIndex: 'score'},
        {text: 'Need Improvement', dataIndex: 'needImprovement'}
    ],

    bbar: {
        items: [{
            text: 'Select All',
            handler: 'onSelectAllLessons'
        }, {
            text: 'Select None',
            handler: 'onDeselectAllLessons'
        }, {
            text: 'Invert Selection',
            handler: 'onInvertLessonsSelection'
        }]
    },

    listeners: {
        select: {fn: 'onLessonsSelect', buffer: 50}
    }
});
