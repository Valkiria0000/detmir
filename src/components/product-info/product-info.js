import React from "react";
import { PiArrowBendUpLeftBold } from "react-icons/pi";
const ProductInfo = (props) => {
  return (
    <div>
      <PiArrowBendUpLeftBold />
      <span>Условия возврата</span>
      <p>
        Обменять или вернуть товар надлежащего качества можно в течение 14 дней
        с момента покупки.
      </p>
      <p>Цены в интернет-магазине могут отличаться от розничных магазинов.</p>
    </div>
  );
};

export default ProductInfo;
