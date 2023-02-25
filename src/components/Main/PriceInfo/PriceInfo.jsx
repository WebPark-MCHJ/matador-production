import React, { useRef, useState } from "react";
import Link from "next/link";
import PriceInfoList from "./PriceInfoList";
import PriceCarusel from "./PriceCarusel";

//translation
import { useTranslation } from "next-i18next";

//icon
import { RiPhoneFill, RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri";

//database
import Posts from "../../../database/priceIno.json";

function PriceInfo() {
  let { t } = useTranslation("PriceInfo");

  const swiperRef = useRef(null);
  const [count, setCount] = useState(1);

  return (
    <section className="priceinfo" id="price">
      <div className="container">
        <div className="priceinfo__bigbox">
          <PriceInfoList />
          <PriceCarusel swiperRef={swiperRef} />
          <div className="priceinfo__box">
            <div>
              <h2 className="priceinfo__title">
                {t("Price Information")}
                <span>.</span>
              </h2>
              <p className="priceinfo__text">{t("These prices...")}</p>
              <Link className="priceinfo__link" href="tel: +998913232223">
                <RiPhoneFill /> {t("Contact us")}
              </Link>
            </div>

            <div className="priceinfo__btnbox">
              <button
                id="previousButton"
                className="priceinfo__btn"
                disabled={count === 1}
                onClick={() => {
                  swiperRef.current?.slidePrev(), setCount(count - 1);
                }}
              >
                <RiArrowLeftLine />
              </button>
              <button
                id="nextButton"
                className="priceinfo__btn"
                disabled={count === Posts.length}
                onClick={() => {
                  swiperRef.current?.slideNext(), setCount(count + 1);
                }}
              >
                <RiArrowRightLine />
              </button>
              <div className="priceinfo__countbox">
                <p className="priceinfo__count-active">0{count}</p>
                <p className="priceinfo__count">/0{Posts.length}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PriceInfo;
