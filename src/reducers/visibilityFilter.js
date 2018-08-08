import { VisibilityFilters } from '../actions';
import * as t from '../const/types';

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case t.SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

export default visibilityFilter;