import { useContext } from 'react'
import { AuthContext } from '../stores/auth'

export default function DashboardPage() {
  const { user } = useContext(AuthContext)

  return (
    <>
      <h1>Dashboard: {user.email}</h1>
    </>
  )
}
