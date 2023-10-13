import axios from 'axios'
import { ApiEndpoint } from './api_endpoint'

export const apiClient = axios.create({
  baseURL: ApiEndpoint.baseUrl
})
