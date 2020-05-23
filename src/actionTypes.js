export const CREATE_POST = 'CREATE_POST';
export const EDIT_POST = 'EDIT_POST';
export const SET_FILTER = 'SET_FILTER';


export const createPost = (user, text) => {
    return {
        type: CREATE_POST,
        user,
        text
    };
};

export const editPost = (id, text) => {
    return {
        type: EDIT_POST,
        id,
        text
    };
};

export const setFilter = (filter) => {
    return {
        type: SET_FILTER,
        filter
    }
}