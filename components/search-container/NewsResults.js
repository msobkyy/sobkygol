import React from "react";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

function NewsResults({ results, related }) {
  const router = useRouter();
  const validURL = (str) => {
    if (str === null || str === undefined || str.length < 5) {
      return "https://dummyimage.com/100x100/";
    } else {
      return str;
    }
  };

  return (
    <div className="grid grid-cols-12 mx-2 my-10 lg:ml-44">
      <div className="col-span-12 lg:col-span-7 p-2 sm:pr-10">
        {results?.data?.results?.map(
          ({ url, title, snippet, date_time, source, image }, index) => (
            <div
              key={index}
              className=" w-full md:w-auto mb-4 p-3 ring-2 ring-gray-200 shadow-md rounded-lg dark:ring-secondary-dark bg-gray-100 dark:bg-secondary-dark "
            >
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="grid grid-cols-5"
              >
                <div className="col-span-4">
                  <h5 className="mb-2 text-2xl tracking-tight text-gray-500 dark:text-white flex justify-start items-center space-x-1">
                    <Image
                      height={15}
                      width={15}
                      alt="icon"
                      src={`${validURL(source.image)}`}
                      className="inline-block mx-4 rounded-full"
                    />
                    <p className="text-sm font-medium">{source.name}</p>
                  </h5>
                  <p className="text-lg  dark:text-blue-300 text-blue-700 line-clamp-2">
                    {title}
                  </p>
                  <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-1">
                    <span className="text-sm">{snippet}</span>
                  </p>
                  <p className="font-medium text-gray-700 dark:text-gray-300 mt-2">
                    <span className="text-xs">{date_time}</span>
                  </p>
                </div>
                <div className="col-span-1 flex items-center justify-center min-h w-full md:justify-end">
                  <Image
                    alt="img search"
                    src={`${validURL(image)}`}
                    height={100}
                    width={100}
                    className="rounded shadow-sm h-min	"
                  />
                </div>
              </a>
            </div>
          )
        )}
      </div>

      <div className="col-span-12 lg:col-span-5 p-5 ">
        <h2 className="text-lg">People are also looking for :</h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:pr-6 max-w-sm lg:max-w-2xl">
          {related?.data[0]?.suggestions.map(({ question }, index) => (
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                router.push(`/news?q=${related.data[0]?.suggestions[index]}`);
              }}
              key={index}
              className="p-3 bg-gray-200 rounded-full my-3 lg:m-3 max-w-1/2 flex justify-start dark:bg-secondary-dark dark:text-white"
            >
              <MagnifyingGlassIcon className="h-5 mx-2" />
              <p className="text-md hover:underline text-black-700 line-clamp-1">
                {related.data[0]?.suggestions[index]}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsResults;
