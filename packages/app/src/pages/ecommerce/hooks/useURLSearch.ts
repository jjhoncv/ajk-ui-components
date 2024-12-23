import { useState, useEffect, useCallback } from 'react'

export function useURLSearch(param: string) {
  const [value, setValue] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get(param) || ''
  })

  const handleURLChange = useCallback(() => {
    const params = new URLSearchParams(window.location.search)
    const newValue = params.get(param) || ''
    setValue(newValue)
  }, [param])

  useEffect(() => {
    // Escuchar cambios en la URL
    window.addEventListener('popstate', handleURLChange)

    // Crear un evento personalizado para cambios de URL
    const urlChangeEvent = new Event('urlChange')
    window.addEventListener('urlChange', handleURLChange)

    return () => {
      window.removeEventListener('popstate', handleURLChange)
      window.removeEventListener('urlChange', handleURLChange)
    }
  }, [handleURLChange])

  return value
}
