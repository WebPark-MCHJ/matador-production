import React from "react";
import Image from "next/legacy/image";

//translation
import { useTranslation } from "next-i18next";

function Calculation() {
  let { t } = useTranslation("calculation");

  return (
    <section className="calculation">
      <div className="container">
        <div className="calculation__bigbox">
          <h2 className="calculation__title">
            {t("Automatador makes a...")}
            <span> !</span>
          </h2>
          <div className="calculation__imgbox">
            <Image
              src={"/images/main/calculation/calculation.png"}
              alt="calculation"
              layout="fill"
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Calculation;
