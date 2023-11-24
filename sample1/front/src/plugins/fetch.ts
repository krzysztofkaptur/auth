import { ofetch } from 'ofetch'

export default ofetch.create({
  baseURL: 'http://localhost:5000/api/v1/'
})
