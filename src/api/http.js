import axios from 'axios'

const http = axios.create({
  baseURL: '/api/v1',
})

export default http
