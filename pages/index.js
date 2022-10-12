import { useRef, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Avatar from "../components/Avatar";
import {
  MagnifyingGlassIcon,
  Squares2X2Icon,
  MicrophoneIcon,
} from "@heroicons/react/24/outline";

import Image from "next/image";
import Footer from "../components/Footer";

export default function Home() {
  const searchInput = useRef(null);
  const router = useRouter();
  const [isValid, setIsValid] = useState(true);

  const search = (e) => {
    e.preventDefault();
    const term = searchInput.current.value;
    if (term.trim() < 1) {
      setIsValid(false);
      return;
    }
    setIsValid(true);

    router.push(`/search?q=${term}`);
  };
  return (
    <div className="flex flex-col justify-center h-screen min-h-[700px] items-center dark:bg-primary-dark dark:text-white">
      <Head>
        <title>SobkyGol</title>
        <meta
          name="description"
          content="Search the world's information, including webpages, images, videos and more. SobkyGol has many special features to help you find exactly what you're looking for."
        />
        <link rel="icon" href="/favicon.ico?v=2" />
      </Head>

      <header className="flex w-full p-4 justify-between text-sm text-gray-700 dark:text-white">
        <div className="flex space-x-4 items-center">
          <a
            href="https://about.google/"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            About
          </a>
        </div>
        <div className="flex space-x-4 items-center">
          <a
            href="https://mail.google.com/"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            Gmail
          </a>
          <a
            href="https://www.google.com/imghp"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            Images
          </a>
          <Squares2X2Icon className="h-10 w-10 p-2 hover:bg-gray-200 dark:hover:bg-secondary-dark rounded-lg cursor-pointer" />
          <Avatar />
        </div>
      </header>

      <form className="flex flex-col items-center mt-24 flex-grow w-4/5">
        <Image alt="SobkyGol" src="/images/SobkyGol.png" height={90} width={320} />
        <div
          className={`w-full flex mt-5 px-5 py-3 items-center hover:shadow-md focus-within:shadow-md max-w-md rounded-full border-gray-200 border-[1.5px] sm:max-w-xl lg:max-w-2xl dark:bg-secondary-dark  dark:border-gray-500 ${
            !isValid ? "border-red-300 dark:border-red-400 " : ""
          }`}
        >
          <MagnifyingGlassIcon className="h-5 mr-3 text-gray-500" />
          <input
            className="focus:outline-none flex-grow dark:bg-secondary-dark"
            ref={searchInput}
          />
          <MicrophoneIcon className="h-5 mr-3 text-gray-500" />
        </div>
        <div className="flex mt-8 space-x-3">
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button onClick={search} className="btn">
            Felling luckey
          </button>
        </div>
      </form>

      <Footer />
    </div>
  );
}
