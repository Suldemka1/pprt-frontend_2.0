const MobileMenuItem = (params) => {

  return (
      <li className="text-white font-semibold tracking-wider">
          <a href={params.url}>{params.title}</a>
      </li>
  )
}

export default MobileMenuItem