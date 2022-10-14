import React from "react";
import PagBtns from "../PagBtns";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

function SearchResults({ results, related }) {
  const router = useRouter();
  return (
    <div className="mx-auto w-full px-3 sm:pl[5%] md:pl-[14%] lg:pl-48  dark:bg-primary-dark dark:text-white">
      <p className="text-gray-600 text-md mb-5 mt-3 dark:text-gray-400">
        About {results?.searchInformation?.formattedTotalResults} results (
        {results?.searchInformation?.formattedSearchTime} seconds)
      </p>
      <div className="grid grid-cols-12">
        <div className=" col-span-12 lg:col-span-7 dark:text-white p-1 ">
          {results?.items?.map((result) => (
            <div
              key={result.link}
              className="max-w-2xl mb-4 p-3 ring-2 ring-gray-200 rounded-lg dark:ring-secondary-dark dark:bg-secondary-dark"
            >
              <div className="group">
                <a
                  href={result.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm line-clamp-1"
                >
                  {result.formattedUrl}
                </a>
                <a href={result.link} target="_blank" rel="noreferrer">
                  <h2 className="text-xl text-blue-600 dark:text-blue-400 mb-3 truncate group-hover:underline">
                    {result.title}
                  </h2>
                </a>
              </div>
              <p className="line-clamp-3 text-gray-500  dark:text-gray-300">
                {result.snippet}
              </p>
            </div>
          ))}
        </div>

        <div className="col-span-12 lg:col-span-5 p-4">
          <h2 className="text-lg">People are also looking for :</h2>
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:pr-6 md:max-w-sm lg:max-w-2xl">
            {related?.data[0]?.suggestions.map(({ question }, index) => (
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  router.push(
                    `/search?q=${related.data[0]?.suggestions[index]}`
                  );
                }}
                key={index}
                className="p-3 bg-gray-200 rounded-full my-3 sm:m-3 max-w-1/2 flex justify-start dark:bg-secondary-dark dark:text-white"
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

      <PagBtns />
    </div>
  );
}

export default SearchResults;
