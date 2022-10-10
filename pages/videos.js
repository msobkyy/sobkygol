import React from "react";
import Head from "next/head";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import VideosResults from "../components/search-container/VideosResults";
import Response4 from "../Response4";

function videos({ results }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{`${router.query.q || "SobkyGol"} - Videos Results`}</title>
        <link rel="icon" href="/favicon.ico?v=2" />
      </Head>
      <Header q={router.query.q} />
      <VideosResults results={results} />
      <Footer />
    </div>
  );
}

export default videos;

export async function getServerSideProps(context) {
  const useDummyData = false;
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
    body: `{"query":"${q} youtube"}`,
  };

  const secData = useDummyData
    ? Response4
    : await fetch(
        "https://google-search-5.p.rapidapi.com/google/videos",
        options
      ).then((response) => response.json());

  return {
    props: {
      results: secData,
    },
  };
}
