import myFetch from '../plugins/fetch'

import { TCredentials, TLoginRes } from '../types/auth'

export const loginService = (credentials: TCredentials): Promise<TLoginRes> =>
  myFetch('/auth/login', {
    method: 'POST',
    body: credentials
  })

export const registerService = (credentials: TCredentials) =>
  myFetch('/auth/register', {
    method: 'POST',
    body: credentials
  })

export const fetchMe = (jwt: string) =>
  myFetch('/auth/me', {
    headers: {
      authorization: jwt
    }
  })
