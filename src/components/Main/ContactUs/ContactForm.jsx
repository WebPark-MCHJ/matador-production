import React, { useState } from "react";
import { useForm } from "react-hook-form";

//translation
import { useTranslation } from "next-i18next";

//database input
import Inputs from "../../../database/contactus.json";

//validation
import { yupResolver } from "@hookform/resolvers/yup";
import { YupValidation } from "./YupValidtion";
import { sendTelegram } from "./SendTelegram";

//icons
import { RiArrowRightSLine } from "react-icons/ri";

function ContactForm() {
  let { t } = useTranslation("contactUs");
  let [success, setSuccess] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(YupValidation),
  });

  const onSubmit = (data, e) => {
    sendTelegram(data, setSuccess);
    reset();

    setTimeout(() => {
      setSuccess(false);
    }, [8000]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contactus__form">
      {Inputs.map((input, key) => {
        return (
          <span key={key + 989}>
            <label
              className={`contactus__label ${
                eval(input.error) ? "contactus__label-error" : ""
              }`}
              htmlFor={input.type}
            >
              <input
                className="contactus__input"
                type="text"
                maxLength={input.maxLength}
                placeholder={t(input.placeholder)}
                name={input.type}
                id={input.type}
                {...register(input.type)}
              />
            </label>
            {eval(input.error) && (
              <span className="contactus__error">{t(eval(input.error))}</span>
            )}
          </span>
        );
      })}
      {success ? (
        <>
          <p className="contactus__success">{t("The message was...")}</p>
          <p className="contactus__desc">{t("Thank you for...")}</p>
        </>
      ) : (
        ""
      )}
      <button className="contactus__btn" type="submit">
        {t("Send")} <RiArrowRightSLine />
      </button>
    </form>
  );
}

export default ContactForm;
