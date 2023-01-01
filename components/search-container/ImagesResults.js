import Image from "next/image";
import React from "react";

function ImagesResults({ results }) {
  const validURL = (str) => {
    if (str === null || str === undefined || str.length < 5) {
      return "https://dummyimage.com/200x100/";
    } else {
      return str;
    }
  };
  console.log(results);
  return (
    <div className="container mx-auto my-10">
      <div className="grid-cols-2 grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 px-1">
        {results?.results.data?.results?.map((index) => (
          <div key={index} className="w-full p-2">
            <a href={index} target="_blank" rel="noreferrer">
              <Image
                alt="search image result"
                src={`https://res.cloudinary.com/demo/image/fetch/${validURL(
                  index
                )}`}
                height={100}
                width={200}
                className="rounded-lg border shadow imgsearch"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImagesResults;
