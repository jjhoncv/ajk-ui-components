import React from 'react'

export const LogoNavMenuMobile = () => {
  return (
    <div className="flex items-center">
      <div className="w-6">
        <img src={getImagePath('/images/ecommerce/LogoInverter.svg')} />
      </div>
      <span className="ml-2 text-2xl font-extralight">TechStore</span>
    </div>
  )
}
