import numeral from "numeral";
import "numeral/locales/ru";

const currency = num => {
  numeral.locale("ru");
  return numeral(num / 100).format("0,0.00 $");
};

export { currency };
