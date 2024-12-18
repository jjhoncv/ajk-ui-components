import { useState } from "react";
import { ButtonAccount } from "./ButtonAccount";
import { Sheet } from "@ajk-ui/sheet";
import { Heart, LogOut, Package, ShoppingCart, User, X } from "lucide-react";
import { useAuth } from "@ajk-ui/auth";

export const AccountNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <>
      <ButtonAccount
        handleClick={() => {
          setIsOpen(true);
        }}
      />
      <Sheet isOpen={isOpen} onClose={() => setIsOpen(false)} side="right">
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Mi Cuenta</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* User Info */}
          <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg mb-6">
            <div className="bg-blue-100 p-2 rounded-full">
              <User className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="font-medium text-gray-800">{user.name}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 space-y-2">
            <button
              onClick={() => (window.location.href = "/pedidos")}
              className="flex items-center space-x-3 p-4 hover:bg-gray-100 rounded-lg w-full"
            >
              <Package className="w-5 h-5 text-gray-600" />
              <div className="flex-1 text-left">
                <p className="text-sm font-medium text-gray-700">Mis Pedidos</p>
                <p className="text-xs text-gray-500"># pedidos activos</p>
              </div>
            </button>

            <button
              onClick={() => (window.location.href = "/wishlist")}
              className="flex items-center space-x-3 p-4 hover:bg-gray-100 rounded-lg w-full"
            >
              <Heart className="w-5 h-5 text-gray-600" />
              <div className="flex-1 text-left">
                <p className="text-sm font-medium text-gray-700">
                  Lista de Deseos
                </p>
                <p className="text-xs text-gray-500"># productos guardados</p>
              </div>
            </button>

            <button
              onClick={() => (window.location.href = "/carrito")}
              className="flex items-center space-x-3 p-4 hover:bg-gray-100 rounded-lg w-full"
            >
              <ShoppingCart className="w-5 h-5 text-gray-600" />
              <div className="flex-1 text-left">
                <p className="text-sm font-medium text-gray-700">Carrito</p>
                <p className="text-xs text-gray-500">Ver productos</p>
              </div>
            </button>
          </div>

          {/* Logout Button */}
          <button
            onClick={() => {
              logout();
              /* Aquí tu lógica de logout */
            }}
            className="flex items-center  space-x-2 w-full p-4 mt-auto text-red-600 hover:bg-red-50 rounded-lg"
          >
            <LogOut className="w-5 h-5" />
            <span className="text-sm font-medium">Cerrar Sesión</span>
          </button>
        </div>
      </Sheet>
    </>
  );
};
