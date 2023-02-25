import * as yup from "yup";

export const YupValidation = yup.object().shape({
  name: yup
    .string()
    .required("Writing is...")
    .matches(/^[ A-Za-z]+$/i, "Use only letters"),
  tel: yup
    .string()
    .required("Writing is...")
    .min(13, "no less than...")
    .matches(/^[ 0-9+]+$/i, "just enter..."),
  address: yup
    .string()
    .required("Writing is...")
    .matches(/^[ A-Za-z]+$/i, "Use only letters"),
  size: yup
    .string()
    .required("Writing is...")
    .matches(/^[ 0-9+]+$/i, "just enter..."),
});
