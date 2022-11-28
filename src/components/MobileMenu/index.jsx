import React, { useEffect, useState } from "react";
import { GrMenu, GrClose } from "react-icons/gr/index.js";

export default function MobileMenu({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    isNavOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isNavOpen]);

  return (
    <div className="xs:black md:hidden bg-blue-900 dark:bg-gray-900">
      <nav className="container mx-auto rounded-3 py-3">
        <section className="MOBILE-MENU flex">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => {
                setIsNavOpen(true)
                console.log('fuck')
            }}
          >
            <GrMenu className="w-7 h-7 [&>path]:stroke-white" fill="white" />
          </div>
          <div
            className={
              isNavOpen
                ? "fixed top-0 right-0 w-full h-full z-10 bg-black opacity-50"
                : "hidden"
            }
            onClick={() => setIsNavOpen(false)}
          ></div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <GrClose className="w-7 h-7 [&>path]:stroke-white" />
            </div>

            <ul className="flex flex-col justify-between gap-2 min-h-[250px] max-h-4/6 h-[70%] px-8 list-none [&>li]:mt-4 [&>li]:uppercase">
              {children}
            </ul>
          </div>
        </section>
      </nav>
    </div>
  );
};