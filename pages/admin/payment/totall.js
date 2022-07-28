import React from "react";

import Admin from "layouts/Admin.js";
import axios from "axios";
import Payment from "components/Payment";
import { useRouter } from "next/router";
import TotallPayments from "components/Cards/totallPayments";

export default function HistoryPage(data) {
  const router = useRouter();
  if (router.isFallback) {
    return <p>Loading</p>;
  }
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded">
            <TotallPayments payments={data.data} />
          </div>
        </div>
      </div>
    </>
  );
}

HistoryPage.layout = Admin;

export const getStaticProps = async () => {
  const { data } = await axios.get(
    "http://127.0.0.1:8000/api/generalpaymenthistory/"
  );
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
};
