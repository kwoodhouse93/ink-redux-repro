import axios from 'axios'

const serverHost = 'http://localhost:8080'

const instance = axios.create({
  baseURL: serverHost,
  timeout: 1000,
})

export const useClient = () => {
  return instance
}
