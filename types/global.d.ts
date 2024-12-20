// src/types/global.d.ts
declare global {
  interface Window {
    getImagePath: (path: string) => string
  }

  // También lo declaramos como variable global
  var getImagePath: (path: string) => string
}

// Necesitamos exportar algo para que sea un módulo
export {}
