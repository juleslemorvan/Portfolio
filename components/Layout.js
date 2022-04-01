import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children, page }) {
  return (
    <div>
      <Head>
        <title>{page}</title>
      </Head>
      <Navbar />
      <main className="pt-4 mx-20">{children}</main>
      <Footer />
    </div>
  );
}
