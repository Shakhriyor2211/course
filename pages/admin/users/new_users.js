import React, { useEffect, useState } from "react";

// layout for page

import Admin from "layouts/Admin.js";
import { useRouter } from "next/router";
import NullTable from "components/Cards/NullTable";
import axios from "axios";

export default function Tables({ data }) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading</p>;
  }

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          {data.map(
            (el) =>
              el.accounts.length > 0 && <NullTable key={el.id} table={el} />
          )}
        </div>
      </div>
    </>
  );
}

Tables.layout = Admin;

export const getStaticProps = async () => {
  const { data } = await axios.get("http://127.0.0.1:8000/api/unknownaccount/");
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
};
