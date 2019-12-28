import { BLOG_POST_GET } from '../actions/types';

const INITIAL_STATE = {
    delete: '',
}

export default (state = INITIAL_STATE, actions) => {
    switch (actions.type) {
        case BLOG_POST_GET:
            alert(actions.payload);
            return state;
        default:
            return state;
    }
}