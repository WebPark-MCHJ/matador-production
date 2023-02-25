import React from "react";
import Image from "next/legacy/image";

//tranlation
import { useTranslation } from "next-i18next";

//database
import Posts from "../../../database/our.json";

function Our() {
  let { t } = useTranslation("our");

  return (
    <section className="our">
      <div className="container">
        <div className="our__bigbox">
          <div className="our__box">
            <h2 className="our__title">
              {t("Our priority")}
              <span>.</span>
            </h2>
            <p className="our__desc">{t("Get to know")}</p>
          </div>
          <ul className="our__list">
            {Posts.map((post, key) => {
              return (
                <li key={key + 874} className="our__item">
                  <div className="our__iconbox">
                    <Image
                      src={post.icon}
                      width="40"
                      height={40}
                      alt={post.text}
                      layout="responsive"
                    />
                  </div>
                  <div className="our__item-box">
                    <p className="our__text">{t(post.text)}</p>
                    <p className="our__info">{t(post.info)}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Our;
