import React, { useEffect, useState } from "react";

// components

import CardTable from "components/Cards/CardTable.js";
import axios from "axios";

// layout for page

import Admin from "layouts/Admin.js";
import { useRouter } from "next/router";

export default function Tables({ data }) {
  const router = useRouter();
  console.log("data: ", data);
  if (router.isFallback) {
    return <p>Loading</p>;
  }

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable users={data} />
        </div>
        {/* <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div> */}
      </div>
    </>
  );
}

Tables.layout = Admin;

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const { data } = await axios.get(
    `http://127.0.0.1:8000/api/courses/${params.id}`
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
