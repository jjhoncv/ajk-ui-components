import { User } from '@ajk-ui/user'
import { useContext, useState, useEffect, createContext } from 'react'

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth debe usarse dentro de AuthProvider')
  }
  return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Verificar token al inicio
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      // Simular obtención de datos del usuario
      setUser({
        id: '1',
        name: 'Usuario Demo',
        email: 'usuario@demo.com',
        role: 'user',
      })
      setIsAuthenticated(true)
    }
  }, [])

  const login = async (email: string, password: string) => {
    try {
      // Simular llamada a API
      const userData: User = {
        id: '1',
        name: 'Usuario Demo',
        email: email,
        role: 'user',
      }

      localStorage.setItem('token', 'demo-token')
      setUser(userData)
      setIsAuthenticated(true)
    } catch (error) {
      throw new Error('Error en el login')
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
