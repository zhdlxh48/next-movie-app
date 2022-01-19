import Head from "next/head";
import React from "react";

interface SeoType {
  title: string;
}
const Seo: React.FC<SeoType> = ({ title }) => {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
};

export default Seo;
