import { ReactNode, createContext, useState } from 'react'

type TProps = {
  children: ReactNode
}

type TUser = {
  id: number | null
  email: string | null
}

type IAuthContext = {
  user: TUser
  setUser: (auth: TUser) => void
}

const initialData = {
  user: {
    id: null,
    email: null
  },
  setUser: () => {}
}

export const AuthContext = createContext<IAuthContext>(initialData)

const AuthContextProvider = ({ children }: TProps) => {
  const [user, setUser] = useState({})

  const value = {
    user,
    setUser
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider
