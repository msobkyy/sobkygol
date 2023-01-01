import React from "react";
import Head from "next/head";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import ImagesResults from "../components/search-container/ImagesResults";
import Response3 from "../Response3";

function Images({ results }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{`${router.query.q || "SobkyGol"} - Images Results`}</title>
        <link rel="icon" href="/favicon.ico?v=2" />
      </Head>
      <Header q={router.query.q} />
      <ImagesResults results={results} />
      <Footer />
    </div>
  );
}

export default Images;

export async function getServerSideProps(context) {
  const useDummyData = true;
  const rapidkey = process.env.RAPID_KEY;
  const q = context.query.q;

  if (q === undefined || q === null || q.length < 1) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": rapidkey,
      "X-RapidAPI-Host": "google-search-5.p.rapidapi.com",
    },
    body: `{"query":"${context.query.q}"}`,
  };

  const secData = useDummyData
    ? Response3
    : await fetch(
        "https://google-search-5.p.rapidapi.com/google/images",
        options
      ).then((response) => response.json());

  return {
    props: {
      results: secData,
    },
  };
}
