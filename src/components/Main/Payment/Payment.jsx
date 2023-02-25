import React from "react";
import Image from "next/legacy/image";

//tramslation
import { useTranslation } from "next-i18next";

//database
import Posts from "../../../database/payment.json";

function Payment() {
  let { t } = useTranslation("payment");

  return (
    <section className="payment">
      <div className="container">
        <div className="payment__bigbox">
          <ul className="payment__list">
            {Posts.map((post, key) => {
              return (
                <li key={key + 313} className="payment__item">
                  <div className="payment__iconbox">
                    <Image
                      src={post.icon}
                      alt={post.name}
                      layout="fill"
                      quality={100}
                    />
                  </div>
                  <div className="payment__box">
                    <h3 className="payment__name">{t(post.name)}</h3>
                    <p className="payment__desc">{t(post.desc)}</p>
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

export default Payment;
