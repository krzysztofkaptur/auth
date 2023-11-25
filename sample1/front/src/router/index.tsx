import { createBrowserRouter, redirect } from 'react-router-dom'

import DashboardLayout from '../layouts/Dashboard'

import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Register from '../pages/Register'
import { action as LogoutAction } from '../pages/Logout'

function dashboardLoader() {
  const jwt = localStorage.getItem('jwt')

  if (!jwt) return redirect('/login')

  return true
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    loader: dashboardLoader,
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
