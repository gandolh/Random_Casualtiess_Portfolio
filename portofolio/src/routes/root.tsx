import NavBar from "@/components/NavBar";
import React from "react";
import { Outlet } from "react-router-dom";


export default function Root() {
  const [NavLinks, setNavLinks] = React.useState<Array<NavLink>>([
    { id: 1, name: "Home", anchor: "/", active: true },
    { id: 2, name: "Projects", anchor: "/projects", active: false },
    { id: 3, name: "Contact", anchor: "/contact", active: false },
    { id: 4, name: "About me", anchor: "/about", active: false },
  ]);

  const changeActive = (id : number) => {
    let navLinksCopy = NavLinks.map((link) =>
      id === link.id ? { ...link, active: true } : { ...link, active: false }
    );
    setNavLinks(navLinksCopy);
  };

  return (
      <>
         <div className="container">
      <NavBar navlinks={NavLinks} onChangeActive={changeActive} />
        <Outlet />
      </div>
      </>
    );
  }