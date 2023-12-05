import axios from 'axios'

const http = axios.create({
  // baseURL: 'http://10.35.93.41:3333',
  baseURL: 'http://localhost:3333',
})

export default http
