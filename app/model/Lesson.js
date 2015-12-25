/**
 * Created by Taras on 25.12.2015.
 */
Ext.define('School.model.Lesson', {
    extend: 'Ext.data.Model',

    fields: [
        'id',
        { name: 'lesson',     type: 'string' },
        { name: 'score',      type: 'int' },
        { name: 'needImprovement',    type: 'boolean', defaultValue: false }
    ],

    validators: {
        lesson: 'presence',
        score: { type: 'range', min: 1, max: 12 }
    }
});