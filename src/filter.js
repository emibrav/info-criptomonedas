//LOS FILTROS SON FUNCIONES

import numeral from "numeral"; // AL TRATARSE DE UNA LIBRERIA NO USAMOS RUTA

const dollarFilter = function(value) {
  if (!value) {
    return "$ 0";
  }
  return numeral(value).format("($0.00a)");
};

const percentFilter = function(value) {
  if (!value) {
    return "0%";
  }
  return `${Number(value).toFixed(2)}%`;
};

export { dollarFilter, percentFilter };
