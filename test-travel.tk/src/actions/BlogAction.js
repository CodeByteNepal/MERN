import { BLOG_POST_GET } from './types';

export const blogPostGet = () => {
    return {
        type: BLOG_POST_GET,
        payload: 'abc'
    }
}
