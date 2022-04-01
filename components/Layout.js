import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children, page }) {
  return (
    <div className="bg-[#18181B] h-screen ">
      <Head>
        <title>{page}</title>

        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar />
      <main className="pt-4 mx-20">{children}</main>
      <Footer />
    </div>
  );
}
