export default function SidebarMenuItem(params) {

  return (
    <li className="sm:hidden md:flex lg:flex flex flex-row items-center gap-2 text-md">
      <a href={params.url}>
        <p className="hover:text-white hover:scale-105 cursor-pointer">
          {params.title}
        </p>
      </a>
    </li>
  );
};