import React from "react";
import Image from "next/legacy/image";

//translation
import { useTranslation } from "next-i18next";

//database
import Posts from "../../../database/priceIno.json";

function PriceInfoList() {
  let { t } = useTranslation("PriceInfo");

  return (
    <ul className="priceinfo__list">
      {Posts.map((post, key) => {
        return (
          <li key={key + 344} className="priceinfo__item">
            <div className="priceinfo__item-box">
              <h3 className="priceinfo__name">{t(post.name)}</h3>
              <div className="priceinfo__descbox">
                <p className="priceinfo__desc">{t("When importing")}</p>
                <p className="priceinfo__desc priceinfo__desc-m">{t("up to million")}</p>
              </div>
              <div>
                <p className="priceinfo__desc-price">{t("Local price")}</p>
                <p className="priceinfo__desc">{t(post.price)}</p>
                <p className="priceinfo__desc-price">{t("Up to som (kg)")}</p>
              </div>
            </div>
            <div className="priceinfo__imgbox">
              <Image
                src={post.image}
                alt={post.name}
                quality="100"
                layout="fill"
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default PriceInfoList;
