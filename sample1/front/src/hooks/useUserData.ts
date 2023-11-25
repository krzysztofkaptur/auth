import { redirect } from 'react-router-dom'
import { useContext } from 'react'

import { fetchMe } from '../services/auth'
import { AuthContext } from '../stores/auth'

async function useUserData() {
  const { user, setUser } = useContext(AuthContext)

  if ('id' in user) {
    return user
  }

  try {
    const fetchedUser = await fetchMe()

    setUser({
      id: 1,
      email: 'dupa@test.com'
    })

    return true
  } catch (error) {
    return redirect('/login')
  }
}

export default useUserData
