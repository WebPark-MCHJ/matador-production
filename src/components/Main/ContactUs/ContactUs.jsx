import Image from "next/legacy/image";
import React from "react";
import ContactForm from "./ContactForm";

//translation
import { useTranslation } from "next-i18next";

function ContactUs() {
  let { t } = useTranslation("contactUs");

  return (
    <section className="contactus" id="contact">
      <div className="container">
        <div className="contactus__bigbox">
          <div className="contactus__headbox">
            <h2 className="contactus__title">{t("Contact us fill in...")}</h2>
            <p className="contactus__text">{t("We will contact you...")}</p>
          </div>
          <div className="contactus__box">
            <div className="contactus__imgbox">
              <Image
                src={"/images/main/contact/bus.png"}
                alt="bus"
                layout="fill"
                quality={100}
              />
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
