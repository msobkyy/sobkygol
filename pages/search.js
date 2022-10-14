import Head from "next/head";
import React from "react";
import Header from "../components/header/Header";
import Response from "../Response";
import Response2 from "../Response2";

import { useRouter } from "next/router";
import SearchResults from "../components/search-container/SearchResults";
import Footer from "../components/Footer";

function Search({ results, related }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{`${router.query.q || "SobkyGol"} - Search Results`}</title>
        <link rel="icon" href="/favicon.ico?v=2" />
      </Head>
      <Header q={router.query.q} />
      <SearchResults results={results} related={related} />
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = false;
  const apikey = process.env.API_KEY;
  const cxkey = process.env.CONTEXTS_KEY;
  const rapidkey = process.env.RAPID_KEY;
  const q = context.query.q;
  const startIndex = context.query.start || "0";

  if (q === undefined || q === null || q.length < 1) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  const resData = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${apikey}&cx=${cxkey}&q=${context.query.q}&start=${startIndex}`
      ).then((response) => response.json());

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": rapidkey,
      "X-RapidAPI-Host": "google-search-5.p.rapidapi.com",
    },
    body: `{"gl":"US","hl":"en_US","keywords":["${context.query.q}"]}`,
  };

  const secData = useDummyData
    ? Response2
    : await fetch(
        "https://google-search-5.p.rapidapi.com/google/search-suggestions",
        options
      ).then((response) => response.json());

  return {
    props: {
      results: resData,
      related: secData,
    },
  };
}
