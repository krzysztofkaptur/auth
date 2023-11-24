import myFetch from '../plugins/fetch'

import { TCredentials } from '../types/auth'

export const loginService = (credentials: TCredentials) => {
  return myFetch('/auth/login', {
    method: 'POST',
    body: credentials
  })
}

export const registerService = (credentials: TCredentials) => {
  return myFetch('/auth/register', {
    method: 'POST',
    body: credentials
  })
}
