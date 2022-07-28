import React, { useEffect, useState } from "react";

// layout for page

import Admin from "layouts/Admin.js";
import { useRouter } from "next/router";
import NullTable from "components/Cards/NullTable";
import axios from "axios";
import CourseArrear from "components/Cards/CardArrear";

export default function CurrentArear({ data }) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading</p>;
  }

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
            <CourseArrear users={data} />
          </div>
        </div>
      </div>
    </>
  );
}

CurrentArear.layout = Admin;

export const getStaticProps = async () => {
  const { data } = await axios.get("http://127.0.0.1:8000/api/statusapi/");
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
};
