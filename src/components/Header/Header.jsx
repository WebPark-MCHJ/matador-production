import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import Navbar from "./Navbar";
import Langs from "./Langs";
import Loading from "../Loading";

//icons
import { RiMenuFoldFill } from "react-icons/ri";

function Header() {
  const [menu, setMenu] = useState(false);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    menu
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
  }, [menu]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, [5000]);
  }, []);

  useEffect(() => {
    loading
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
  }, [loading]);

  return (
    <>
      {loading ? <Loading /> : ""}

      <header className="header">
        <div className="container">
          <div className="header__bigbox">
            <Link className="header__logo" href={"/"}>
              <Image
                src={"/images/logo.svg"}
                alt="logo"
                width={"241"}
                height={"40"}
                layout="responsive"
                quality="100"
              />
            </Link>
            <Navbar setMenu={setMenu} menu={menu} />
            <div className="header__lang">
              <Langs />
            </div>
            <button
              className="header__menubtn"
              type="button"
              onClick={() => setMenu(!menu)}
            >
              <RiMenuFoldFill />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
