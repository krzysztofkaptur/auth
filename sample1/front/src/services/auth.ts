import myFetch from '../plugins/fetch'

import { TCredentials } from '../types/auth'

export const loginService = (credentials: TCredentials) =>
  myFetch('/auth/login', {
    method: 'POST',
    body: credentials
  })

export const registerService = (credentials: TCredentials) =>
  myFetch('/auth/register', {
    method: 'POST',
    body: credentials
  })

export const fetchMe = () => myFetch('/auth/me')
