import React from "react";

import PaypalExpressBtn from "react-paypal-express-checkout";

function PayPalBtn({ total, onCancel, onSuccess, onError }) {
  const client = {
    sandbox: process.env.REACT_APP_APP_ID_SANDBOX,
    production: "YOUR-PRODUCTION-APP-ID"
  };

  return (
    <PaypalExpressBtn
      env="sandbox"
      client={client}
      currency={"USD"}
      total={total}
      onError={onError}
      onSuccess={onSuccess}
      onCancel={onCancel}
    />
  );
}

export default PayPalBtn;
