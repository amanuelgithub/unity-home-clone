import Head from "next/head";
import React from "react";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

export function Layout({ children }) {
  return (
    <div className="">
      <Head>
        <title>Unity Home Clone</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
