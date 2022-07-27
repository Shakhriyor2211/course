import React from "react";

import Admin from "layouts/Admin.js";
import axios from "axios";
import Payment from "components/Payment";

export default function PaymentPage(data) {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <Payment data={data.data} />
          </div>
        </div>
      </div>
    </>
  );
}

PaymentPage.layout = Admin;

export const getStaticProps = async () => {
  const { data } = await axios.get("http://127.0.0.1:8000/api/payment/");
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
};
