import React from "react";

function NewsResults({ results }) {
  console.log(results);
  return (
    <div className="flex flex-wrap justify-center items-center max-w-screen-lg mx-2 my-10 lg:ml-48  ">
      {results?.data?.results?.map(
        ({ url, title, snippet, date_time, source, image }, index) => (
          <div key={index} className="md:w-screen w-full">
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="grid grid-cols-5 p-5 my-1 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-secondary-dark dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <div className="col-span-4">
                <h5 className="mb-2 text-2xl tracking-tight text-gray-500 dark:text-white">
                  <p className="text-sm">
                    <img
                      alt="icon"
                      src={source.image}
                      className="inline-block mr-2"
                    />
                    {source.name}
                  </p>
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
                <img
                  alt="img search"
                  src={image}
                  className="rounded shadow-sm h-min	"
                />
              </div>
            </a>
          </div>
        )
      )}
    </div>
  );
}

export default NewsResults;
