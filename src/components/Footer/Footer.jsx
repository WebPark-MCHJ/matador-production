import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import FooterNav from "./Navbar";

//translation
import { useTranslation } from "next-i18next";

function Footer() {
  let { t } = useTranslation("footer");

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__bigbox">
          <div className="footer__headbox">
            <Link className="footer__logo" href={"/"}>
              <Image
                src={"/images/footer/logo.png"}
                alt="logo"
                quality={100}
                layout="fill"
              />
            </Link>
            <Link className="footer__us" href={"tel: +998913232223"}>
              {t("Contact us")}
            </Link>
          </div>
          <FooterNav />
          <span className="footer__copybox">
            <p className="footer__copyright">
              {t("Design and...")}
              <Link target={"_blank"} href={"https://webpark.uz/"}>
                Webpark.uz
              </Link>
              {t("created...")}
            </p>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
