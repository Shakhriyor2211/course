// layout for page

import Admin from "layouts/Admin.js";
import { useRouter } from "next/router";
import NullTable from "components/Cards/NullTable";
import axios from "axios";
import DeleteTable from "components/Cards/DeleteTable";

export default function Delete({ data }) {
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
              el.accounts.length > 0 && <DeleteTable key={el.id} table={el} />
          )}
        </div>
      </div>
    </>
  );
}

Delete.layout = Admin;

export const getStaticProps = async () => {
  const { data } = await axios.get(
    "http://127.0.0.1:8000/api/deleteaccountlist/"
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
