import { ReactNode, createContext, useState } from 'react'

type TProps = {
  children: ReactNode
}

type TUser = {
  id: number
  email: string
}

type IAuthContext = {
  user: TUser
  setUser: (auth: TUser) => void
}

export const AuthContext = createContext<IAuthContext | null>(null)

const AuthContextProvider = ({ children }: TProps) => {
  const [user, setUser] = useState({})

  const value = {
    user,
    setUser
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider
