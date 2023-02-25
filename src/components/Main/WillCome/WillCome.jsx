import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";

//tramslation
import { useTranslation } from "next-i18next";

//icons
import { RiTelegramFill, RiArrowRightSLine } from "react-icons/ri";

function WillCome() {
  let { t } = useTranslation("willCome");

  return (
    <section className="willcome" id="tg">
      <div className="container">
        <div className="willcome__bigbox">
          <h2 className="willcome__title">
            {t("Contact us and...")}<span>.</span>
          </h2>
          <div className="willcome__box">
            <div className="willcome__imgbox">
              <Image
                src={"/images/main/willcome/bus.png"}
                alt="bus"
                layout="fill"
                quality={100}
              />
            </div>
            <div className="willcome__infobox">
              <div className="willcome__mapimg">
                <Image
                  src={"/images/main/willcome/map.png"}
                  alt="map"
                  layout="fill"
                  quality={100}
                />
              </div>
              <p className="willcome__text">{t("We buy auto...")}</p>
              <Link className="willcome__link" href="/">
                <span>
                  <RiTelegramFill className="willcome__icon" />
                  {t("Contact us via...")}
                  <RiArrowRightSLine className="willcome__icon-r" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WillCome;
