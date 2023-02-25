import React, { useRef } from "react";
import Image from "next/legacy/image";

//translation
import { useTranslation } from "next-i18next";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Navigation } from "swiper";

//database
import Posts from "../../../database/priceIno.json";

function PriceCarusel({ swiperRef }) {
  let { t } = useTranslation("PriceInfo");

  return (
    <Swiper
      onBeforeInit={(Swiper) => {
        swiperRef.current = Swiper;
      }}
      navigation={true}
      modules={[Navigation]}
      className="swiper priceinfo__list priceinfo__carusel"
    >
      {Posts.map((post, key) => {
        return (
          <SwiperSlide key={key + 344} className="priceinfo__item">
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
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default PriceCarusel;
