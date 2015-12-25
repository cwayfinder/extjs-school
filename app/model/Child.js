Ext.define('School.model.Child', {
    extend: 'Ext.data.TreeModel',
    fields: [
        'id',
        { name: 'text', mapping: 'name'}
    ]
});