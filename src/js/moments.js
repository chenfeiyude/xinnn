import axios from 'axios'

export default {
    get_moments_by_hashtag(hashtag, page = 1) {
        return axios.get('/api/v1.0/search_hashtag/'+hashtag+'/'+page);
    }
}