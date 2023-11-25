import { Outlet, Form } from 'react-router-dom'

import useUserData from '../hooks/useUserData'

export default function DashboardLayout() {
  useUserData()

  return (
    <>
      <nav>
        <Form method="POST" action="/logout">
          <button>Logout</button>
        </Form>
      </nav>
      <Outlet />
    </>
  )
}
