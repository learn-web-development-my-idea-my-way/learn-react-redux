import Axios from 'axios'

const KEY = 'AIzaSyD7n9N0BDteVUdmx7NmzRrqcZgrMl7cQiQ'

export default Axios.create( {
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResult: 10,
    key: KEY
  }
})
