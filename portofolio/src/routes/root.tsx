import NavBar from "@/components/layout/NavBar";
import React from "react";
import { Outlet } from "react-router-dom";


export default function Root() {
  const [NavLinks, setNavLinks] = React.useState<Array<NavLink>>([
    { id: 1, name: "Home", anchor: "/", active: true },
    { id: 2, name: "Projects", anchor: "/projects", active: false },
    { id: 3, name: "Contact", anchor: "/contact", active: false },
  ]);

  const changeActive = (id: number) => {
    let navLinksCopy = NavLinks.map((link) =>
      id === link.id ? { ...link, active: true } : { ...link, active: false }
    );
    setNavLinks(navLinksCopy);
  };

  return (
    <>
      <NavBar navlinks={NavLinks} onChangeActive={changeActive} />  
        <Outlet />
    </>
  );
}