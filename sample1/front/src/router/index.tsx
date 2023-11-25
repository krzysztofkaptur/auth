import { createBrowserRouter } from 'react-router-dom'

import DashboardLayout from '../layouts/Dashboard'

import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Register from '../pages/Register'
import { action as LogoutAction } from '../pages/Logout'

// import useUserData from '../hooks/useUserData'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/logout',
    action: LogoutAction
  }
])

export default router
