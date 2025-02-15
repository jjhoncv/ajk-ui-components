import { AuthProvider } from '@ajk-ui/auth'
import { Modal, ModalProps } from '@ajk-ui/modal'
import { LoginForm } from './LoginForm'
import { FC } from 'react'

interface LoginModalProps extends Omit<ModalProps, 'children'> {}

export const LoginModal: FC<LoginModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-white p-8">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900">Iniciar Sesión</h1>
            <p className="mt-2 text-gray-600">Ingresa a tu cuenta de TechStore</p>
          </div>

          <LoginForm />
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              ¿No tienes una cuenta?{' '}
              <a href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                Regístrate aquí
              </a>
            </p>
          </div>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">O continúa con</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                Google
              </button>
              <button className="flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}
