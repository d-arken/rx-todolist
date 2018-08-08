import * as t from '../const/types';

let nextTodoId = 0;

export const addTodo = text => ({
    type: t.ADD_TODO,
    id: nextTodoId++,
    text
});

export const setVisibilityFilter = filter => ({
    type: t.SET_VISIBILITY_FILTER,
    filter
});

export const toggleTodo = id => ({
    type: t.TOGGLE_TODO,
    id
});

export const VisibilityFilters = {
    SHOW_ALL: t.SHOW_ALL,
    SHOW_COMPLETED: t.SHOW_COMPLETED,
    SHOW_ACTIVE: t.SHOW_ACTIVE
}