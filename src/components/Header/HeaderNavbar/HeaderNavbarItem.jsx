const HeaderNavbarItem = ({ children, href }) => {
  return (
      <a href={href} className="h-full min-h-[50px] flex items-center text-lg font-normal cursor-pointer px-1">
        {children}
      </a>
  )
}

export default HeaderNavbarItem