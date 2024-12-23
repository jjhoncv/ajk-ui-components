export const LogoFooter = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-6">
        <img src={getImagePath('/images/ecommerce/LogoInverter.svg')} />
      </div>
      <div className="ml-1 flex flex-col" style={{ lineHeight: '15px' }}>
        <p className="text-3xl font-extralight text-gray-800">TechStore</p>
      </div>
    </div>
  )
}
