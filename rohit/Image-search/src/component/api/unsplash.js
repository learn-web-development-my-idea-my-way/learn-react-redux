import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID cQ5vHtgRM2CATekU3nKFU-uR0nUctx0CTWMYp8LhgMA'
    }
})