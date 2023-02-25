import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

//translation
import { useTranslation } from "next-i18next";

//icons
import { FiGlobe } from "react-icons/fi";

//translation

function Langs() {
  let { t } = useTranslation("navbar");
  const router = useRouter();

  return (
    <div className="header__langbox">
      <FiGlobe className="header__icon" />
      <Link
        href={router.pathname}
        locale={"uz"}
        className={`header__link ${
          router.locale == "uz" ? "header__link-active" : ""
        }`}
      >
        {t("uzb")}
      </Link>
      <Link
        href={router.pathname}
        locale={"ru"}
        className={`header__link ${
          router.locale == "ru" ? "header__link-active" : ""
        }`}
      >
        {t("rus")}
      </Link>
    </div>
  );
}

export default Langs;
