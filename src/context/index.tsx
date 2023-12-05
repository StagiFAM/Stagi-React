import { ReactNode, createContext, useState } from 'react'

interface User {
  token: string
  name: string
  cpf: string
  email: string
  role: string
}

interface UserAuthentication {
  user: User
  setUser: (user: User) => void
}

export const AuthContext = createContext({} as UserAuthentication)

interface AuthContextProps {
  children?: ReactNode
}

export function AuthContextProvider({ children }: AuthContextProps) {
  const [authState, setAuthState] = useState<User>({
    token: '',
    name: '',
    cpf: '',
    email: '',
    role: '',
  })

  function setUser(user: User) {
    setAuthState(user)
  }

  return (
    <AuthContext.Provider value={{ user: authState, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}
