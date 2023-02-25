import React, { useEffect, useState } from "react";
import Link from "next/link";

//icons
import { RiPhoneFill, RiMoneyDollarBoxLine } from "react-icons/ri";
import { SlArrowDown } from "react-icons/sl";

//transaltion
import { useTranslation } from "next-i18next";

//database
import Posts from "../../database/hero.json";

function Hero({ prices }) {
  let { t } = useTranslation("hero");
  let [data, setData] = useState([]);

  useEffect(() => {
    setData(Object.values(prices));
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero__bigbox">
          <div className="hero__telbox">
            <Link className="hero__tel" href="tel: +998913232223">
              +998 91 323 22 23
            </Link>
            <Link className="hero__tel" href="tel: +998333232223">
              +998 33 323 22 23
            </Link>
            <Link className="hero__tel" href="tel: +998917000009">
              +998 91 700 00 09
            </Link>
          </div>

          <div className="hero__box">
            <div>
              <div className="hero__descbox">
                <h2 className="hero__title">
                  {t("Avto")}
                  <span>{t("Matador")}</span>
                </h2>
                <p className="hero__desc">{t("A company")}</p>
              </div>

              <div className="hero__pricebox">
                <Link className="hero__telbtn" href={"tel:  +998913232223"}>
                  {t("Contact us")} <RiPhoneFill />
                </Link>
                <Link className="hero__pricebtn" href={"tel:  +998913232223"}>
                  {t("Prices")} <RiMoneyDollarBoxLine />
                </Link>
              </div>
            </div>

            <ul className="hero__list">
              {Posts.map((post, key) => {
                return (
                  <li key={key + 781} className="hero__item">
                    <div className="hero__infobox">
                      <p className="hero__info">{post.number}</p>
                      <div className="hero__info-marka">
                        <span>{post.type1}</span>
                        <p>{t(post.name)}</p>
                      </div>
                    </div>
                    <p className="hero__item-price">$ {data[key]}</p>
                  </li>
                );
              })}
            </ul>
          </div>

          <SlArrowDown className="hero__down" />
        </div>
      </div>
      <div className="container">
        <div className="hero__bg"></div>
        <div className="hero__videobox">
          <video
            className="hero__video"
            type="video/mp4"
            src="/video/banner_bg.mp4"
            muted
            autoPlay
            loop
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
