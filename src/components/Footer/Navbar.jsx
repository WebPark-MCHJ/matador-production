import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import * as Scroll from "react-scroll";

//translation
import { useTranslation } from "next-i18next";

//database
import Posts from "../../database/footer.json";

function FooterNav() {
  let { t } = useTranslation("footer");

  return (
    <ul className="footer__list">
      {Posts.map((post, key) => {
        return (
          <li key={key + 226} className="footer__item">
            <Scroll.Link
              className="footer__link"
              to={post.link}
              smooth={true}
              spy={true}
              duration={600}
              offset={-30}
            >
              {t(post.title)}
              <span className="footer__iconbox">
                <Image
                  className="footer__icon"
                  src={post.icon}
                  alt={post.title}
                  layout="fill"
                  quality={100}
                />
              </span>
            </Scroll.Link>
          </li>
        );
      })}
    </ul>
  );
}

export default FooterNav;
