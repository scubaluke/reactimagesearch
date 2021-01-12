import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 8EzE9T-ZBmBRQ5ho0kVuwfb_BY5zsSPJhEPeIPa2gyU',
    }
})