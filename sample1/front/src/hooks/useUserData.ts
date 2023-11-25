import { redirect } from 'react-router-dom'
import { useContext } from 'react'

import { fetchMe } from '../services/auth'
import { AuthContext } from '../stores/auth'

async function useUserData() {
  const { user, setUser } = useContext(AuthContext)

  if (user.id) {
    return user
  }

  try {
    const jwt = localStorage.getItem('jwt')

    const me = await fetchMe(jwt as string)

    setUser(me)

    return true
  } catch (error) {
    return redirect('/login')
  }
}

export default useUserData
