/**
 * Created by Taras on 25.12.2015.
 */
Ext.define('School.store.Lessons', {
    extend: 'Ext.data.Store',

    storeId: 'lessons',

    model: 'School.model.Lesson',

    autoLoad: true,

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        },

        data : {
            items: [
                {id: 1, lesson: 'reading', score: 11, needImprovement: false, childId: 1},
                {id: 2, lesson: 'writing', score: 10, needImprovement: false, childId: 1},
                {id: 3, lesson: 'painting', score: 5, needImprovement: true, childId: 1},
                {id: 4, lesson: 'music', score: 7, needImprovement: true, childId: 1},
                {id: 5, lesson: 'mathematics', score: 10, needImprovement: false, childId: 1},
                {id: 6, lesson: 'physical activity', score: 5, needImprovement: true, childId: 1},

                {id: 7, lesson: 'mathematics', score: 10, needImprovement: false, childId: 2},
                {id: 8, lesson: 'physical activity', score: 5, needImprovement: true, childId: 2}
            ]
        }
    }
});