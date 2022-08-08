/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="pt-16 items-center flex h-screen justify-end">
        <img className="h-full" src="/img/pattern_nextjs.png" alt="..." />
      </section>
    </>
  );
}
