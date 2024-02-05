import NavBar from "@/components/layout/NavBar";
import config from "@/config";
import React from "react";
import { Outlet } from "react-router-dom";


export default function Root() {
  const [NavLinks, setNavLinks] = React.useState<Array<NavLink>>([
    { id: 1, name: "Home", anchor: config.basePath, active: true },
    { id: 2, name: "Projects", anchor: config.basePath + "projects", active: false },
    { id: 3, name: "Editor", anchor: config.basePath + "editor", active: false },
    { id: 4, name: "Contact", anchor: config.basePath + "contact", active: false },
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