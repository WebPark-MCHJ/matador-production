import React, { useState } from "react";
import * as Scroll from "react-scroll";
import Langs from "./Langs";

//database
import Posts from "../../database/Navbar.json";

//translation
import { useTranslation } from "next-i18next";

function Navbar({ menu, setMenu }) {
  let [active, setActive] = useState("hero");
  let { t } = useTranslation("navbar");

  return (
    <nav className={`header__nav ${menu ? "header__nav-active" : ""}`}>
      <ul className="header__list">
        {Posts.map((post, key) => {
          return (
            <li key={key + 97} className="header__item">
              <Scroll.Link
                onClick={() => {
                  setActive(post.link);
                  setMenu(false);
                }}
                className={`header__link ${
                  active == post.link ? "header__link-active" : ""
                }`}
                to={post.link}
                smooth={true}
                spy={true}
                duration={600}
                offset={-30}
              >
                {t(post.title)}
              </Scroll.Link>
            </li>
          );
        })}
      </ul>
      <div className="header__langm">
        <Langs />
      </div>
    </nav>
  );
}

export default Navbar;
