import axios from 'axios'

export function request(options = {}) {
  const option = {
    url: process.env.REACT_APP_API_URL + '/' + options.url,
    method: options.method,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    data: {
      ...options.data,
    },
  }
  return axios(option)
}
