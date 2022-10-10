import React from "react";
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false })

function VideosResults({ results }) {
    console.log(results)
  return (
    <div className="flex flex-wrap justify-center items-start  gap-4 my-7">
      {results?.data?.results?.map(({ url, title }, index) => (
        <div key={index} className="">
          <ReactPlayer url={url} controls width="355px" height="200px" />
          <a href={url} target="_blank" rel="noreferrer">
            <p className="text-lg hover:underline dark:text-blue-300 text-blue-700 max-w-fit">
              {title}
            </p>
          </a>
        </div>
      ))}
    </div>
  );
}

export default VideosResults;
