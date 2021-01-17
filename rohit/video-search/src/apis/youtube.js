import Axios from 'axios'

<<<<<<< HEAD
const KEY = 'CHOOSE_YOUR_API_KEY'
=======
const KEY = 'AIzaSyD7n9N0BDteVUdmx7NmzRrqcZgrMl7cQiQ'
>>>>>>> master

export default Axios.create( {
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResult: 10,
    key: KEY
  }
})
