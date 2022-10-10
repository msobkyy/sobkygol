import Image from "next/image";
import React from "react";

function ImagesResults({ results }) {
  return (
    <div className="container mx-auto my-10">
      <div className="grid-cols-2 grid sm:grid-cols-7">
        {results?.data?.results?.map((index) => (
          <a
            key={index}
            href={index}
            target="_blank"
            rel="noreferrer"
            className="sm:p-3 p-3"
          >
            <div className="w-full ">
              <Image
                src={`https://res.cloudinary.com/demo/image/fetch/${index}`}
                height={100}
                width={200}
                className="rounded-lg border shadow imgsearch"
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ImagesResults;
