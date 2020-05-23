import { CREATE_POST, EDIT_POST, SET_FILTER} from "./actionTypes";

export function postsReducers(state = [], action) {

    switch (action.type) {
        case CREATE_POST: {
            const { type, ...post } = action;
            return [...state, post];
        }
        case EDIT_POST: {
            const { type, id, ...newPost } = actio  n;
            return state.map((oldPost, index) => action.id === index ? {...oldPost, ...newPost}: oldPost);
        }
        default:
            return state;

    }

};

export function filterReducer(state = 'all', action) {
    switch (action.type) {
        case SET_FILTER: {
            return action.filter;
        }
        default:
            return state;
    }
}