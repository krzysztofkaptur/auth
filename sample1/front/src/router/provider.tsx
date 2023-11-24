import { RouterProvider } from 'react-router-dom'

import router from './index'

export default function Provider() {
  return <RouterProvider router={router} />
}
