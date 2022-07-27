// components

import axios from "axios";

// layout for page

import Admin from "layouts/Admin.js";
import { useRouter } from "next/router";
import Update from "components/Update";

export default function UpdatePage({ data }) {
  console.log(data);
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading</p>;
  }

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <Update user={data} />
        </div>
      </div>
    </>
  );
}

UpdatePage.layout = Admin;

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const { data } = await axios.get(
    `http://127.0.0.1:8000/api/account/${params.update}/edit/`
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
