import React from "react";
import Link from "next/link";

//translation
import { useTranslation } from "next-i18next";

//icons
import { RiTelegramFill, RiArrowRightSLine } from "react-icons/ri";

function Why() {
  let { t } = useTranslation("why");

  return (
    <section className="why">
      <div className="container">
        <div className="why__bigbox">
          <h2 className="why__title">
            {t("Why exactly")}
            <span>?</span>
          </h2>
          <div className="why__box">
            <p className="why__desc">{t("The company has...")}</p>
            <div className="why__linkbox">
              <Link className="why__link" href={"/"}>
                <RiTelegramFill className="why__icon" />
                {t("Contact us via telegram")}
                <RiArrowRightSLine className="why__icon-r" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Why;
