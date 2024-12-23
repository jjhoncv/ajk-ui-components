export const Logo = () => {
  return (
    <div
      className="flex cursor-pointer items-center"
      onClick={() => {
        if (typeof window !== 'undefined') {
          window.location.href = getImagePath(
            '/iframe.html?args=&id=pages-ecommerce--home-page&viewMode=story'
          )
        }
      }}
    >
      <div className="w-6 md:w-12">
        <img src={getImagePath('/images/ecommerce/Logo.svg')} />
      </div>
      <span className="ml-2 text-2xl font-extralight text-black md:text-4xl">TechStore</span>
    </div>
  )
}
