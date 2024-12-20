import { useState } from 'react'
import { ButtonAccount } from './ButtonAccount'
import { Sheet } from '@ajk-ui/sheet'
import { Heart, LogOut, Package, ShoppingCart, User, X } from 'lucide-react'
import { useAuth } from '@ajk-ui/auth'

export const AccountNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth()

  if (!user) return null

  return (
    <>
      <ButtonAccount
        handleClick={() => {
          setIsOpen(true)
        }}
      />
      <Sheet isOpen={isOpen} onClose={() => setIsOpen(false)} side="right">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Mi Cuenta</h2>
            <button onClick={() => setIsOpen(false)} className="rounded-full p-2 hover:bg-gray-100">
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          {/* User Info */}
          <div className="mb-6 flex items-center space-x-3 rounded-lg bg-gray-50 p-4">
            <div className="rounded-full bg-blue-100 p-2">
              <User className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="font-medium text-gray-800">{user.name}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 space-y-2">
            <button
              onClick={() => (window.location.href = '/pedidos')}
              className="flex w-full items-center space-x-3 rounded-lg p-4 hover:bg-gray-100"
            >
              <Package className="h-5 w-5 text-gray-600" />
              <div className="flex-1 text-left">
                <p className="text-sm font-medium text-gray-700">Mis Pedidos</p>
                <p className="text-xs text-gray-500"># pedidos activos</p>
              </div>
            </button>

            <button
              onClick={() => (window.location.href = '/wishlist')}
              className="flex w-full items-center space-x-3 rounded-lg p-4 hover:bg-gray-100"
            >
              <Heart className="h-5 w-5 text-gray-600" />
              <div className="flex-1 text-left">
                <p className="text-sm font-medium text-gray-700">Lista de Deseos</p>
                <p className="text-xs text-gray-500"># productos guardados</p>
              </div>
            </button>

            <button
              onClick={() => (window.location.href = '/carrito')}
              className="flex w-full items-center space-x-3 rounded-lg p-4 hover:bg-gray-100"
            >
              <ShoppingCart className="h-5 w-5 text-gray-600" />
              <div className="flex-1 text-left">
                <p className="text-sm font-medium text-gray-700">Carrito</p>
                <p className="text-xs text-gray-500">Ver productos</p>
              </div>
            </button>
          </div>

          {/* Logout Button */}
          <button
            onClick={() => {
              logout()
              /* Aquí tu lógica de logout */
            }}
            className="mt-auto flex w-full items-center space-x-2 rounded-lg p-4 text-red-600 hover:bg-red-50"
          >
            <LogOut className="h-5 w-5" />
            <span className="text-sm font-medium">Cerrar Sesión</span>
          </button>
        </div>
      </Sheet>
    </>
  )
}
