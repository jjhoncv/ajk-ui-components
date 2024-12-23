import { useAuth } from '@ajk-ui/auth'
import { Button } from '@ajk-ui/button'
import { Field } from '@ajk-ui/field'
import { Input } from '@ajk-ui/input'
import { Eye } from 'lucide-react'
import { useState } from 'react'

export const LoginForm = () => {
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await login(email, password)
      // Redirigir después del login exitoso
      // window.top?.location.reload();
    } catch (error) {
      console.error('Error en login:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Field label="Correo electrónico">
          <Input
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="ejemplo@correo.com"
            required
          />
        </Field>
      </div>

      <div>
        <Field label="Contraseña" hint="La contraseña debe tener al menos 8 caracteres">
          <Input
            id="password"
            type={'password'}
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Ingresa tu contraseña"
            rightIcon={Eye}
            required
          />
        </Field>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
            Recordarme
          </label>
        </div>
        <a href="/forgot-password" className="text-sm text-indigo-600 hover:text-indigo-500">
          ¿Olvidaste tu contraseña?
        </a>
      </div>

      <Button
        type="submit"
        // disabled={isLoading}
        // className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
      >
        Iniciar Sesión
      </Button>
    </form>
  )
}
