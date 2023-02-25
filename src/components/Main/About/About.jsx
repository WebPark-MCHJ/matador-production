import React, { useRef, useState } from "react";
import Image from "next/legacy/image";

//translation
import { useTranslation } from "next-i18next";

//icons
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Navigation } from "swiper";

//database
import Posts from "../../../database/about.json";

function About() {
  let { t } = useTranslation("about");
  const swiperRef = useRef(null);
  const [count, setCount] = useState(1);

  return (
    <section className="about">
      <div className="container">
        <div className="about__bigbox">
          <h2 className="about__title">
            {t("our company...")}
            <span>.</span>
          </h2>

          <div className="about__box">
            <div className="about__imgbox">
              <Image
                src={"/images/main/about/about.jpg"}
                alt="about"
                quality={100}
                layout="fill"
              />
            </div>

            <Swiper
              onBeforeInit={(Swiper) => {
                swiperRef.current = Swiper;
              }}
              navigation={true}
              modules={[Navigation]}
              className="about__list"
            >
              {Posts.map((post, key) => {
                return (
                  <SwiperSlide key={key + 276} className="about__item">
                    {t(post.text)}
                  </SwiperSlide>
                );
              })}
              <div className="about__infobox">
                <div className="about__countbox">
                  <p className="about__count-active">0{count}</p>
                  <p className="about__count">/0{Posts.length}</p>
                </div>
                <div className="about__btnbox">
                  <button
                    id="previousButton"
                    className="about__btn"
                    disabled={count === 1}
                    onClick={() => {
                      swiperRef.current?.slidePrev(), setCount(count - 1);
                    }}
                  >
                    <RiArrowLeftLine />
                  </button>
                  <button
                    id="nextButton"
                    className="about__btn"
                    disabled={count === Posts.length}
                    onClick={() => {
                      swiperRef.current?.slideNext(), setCount(count + 1);
                    }}
                  >
                    <RiArrowRightLine />
                  </button>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
