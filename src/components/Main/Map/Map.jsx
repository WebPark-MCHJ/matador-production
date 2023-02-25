import { useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";

//icons
import { RiMapPin2Fill } from "react-icons/ri";

function Map() {
  let {t} = useTranslation("map")

  return (
    <section className="map">
      <div className="container">
        <div className="map__bigbox">
          <iframe
            className="map__address"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.2135927912705!2d70.92023941420298!3d40.49265963411307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38baef57bfe66c8d%3A0xa4e779d41e6a1cd8!2sAvtomatador!5e0!3m2!1sru!2s!4v1674630890585!5m2!1sru!2s"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="map__box">
            <Link
              target={"_blank"}
              href="https://goo.gl/maps/9tcwjcj3hQTE9xGH7"
              className="map__text"
            >
              {t("Our address")} <RiMapPin2Fill className="map__icon" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Map;
