import { ofetch } from 'ofetch'

export default ofetch.create({
  baseURL: 'http://localhost:5000/api/v1/',
  credentials: 'include',
  onResponse({ response }) {
    if (response.status === 401) {
      window.location.href = '/login'
    }
  }
})
