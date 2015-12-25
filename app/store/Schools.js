/**
 * Created by Taras on 25.12.2015.
 */
Ext.define('School.store.Schools', {
    extend: 'Ext.data.TreeStore',

    storeId: 'schools',

    model: 'School.model.School',

    proxy: {
        type: 'memory',
        reader: {
            typeProperty: 'mtype'
        }
    },
    root: {
        text: 'Schools',
        expanded: true,
        children: [{
            name: 'number 1',
            mtype: 'School',
            expanded: true,
            children: [{
                id: 1,
                name: 'Olena Matsevko',
                mtype: 'Child',
                leaf: true
            }, {
                id: 2,
                name: 'Oksana Matsevko',
                mtype: 'Child',
                leaf: true
            }]
        }, {
            name: 'number 2',
            mtype: 'School',
            expanded: true,
            children: [{
                id: 3,
                name: 'John Smith',
                mtype: 'Child',
                leaf: true
            }, {
                id: 4,
                name: 'Jack Black',
                mtype: 'Child',
                leaf: true
            }, {
                id: 5,
                name: 'Nick White',
                mtype: 'Child',
                leaf: true
            }]
        }, {
            name: 'number 3',
            mtype: 'School',
            expanded: true,
            children: [{
                id: 6,
                name: 'Sailor Moon',
                mtype: 'Child',
                leaf: true
            }]
        }]
    }
});