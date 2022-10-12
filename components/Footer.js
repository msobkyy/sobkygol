import React, { useState, useEffect } from "react";
import {
  GlobeAltIcon,
  InformationCircleIcon,
  MapPinIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";
import axios from "axios";

function Footer() {
  const [state, setState] = useState({
    ip: "",
    countryName: "",
    countryCode: "",
    city: "",
    timezone: "",
  });

  const getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        setState({
          ...state,
          ip: data.ip,
          countryName: data.country_name,
          countryCode: data.country_calling_code,
          city: data.city,
          timezone: data.timezone,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getGeoInfo();
  }, []);

  return (
    <footer className="text-sm grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-gray-500  dark:bg-secondary-dark dark:text-white">
      <div className="px-4 py-3 grid grid-cols-1 sm:grid-cols-2">
        <div className="flex space-x-3 justify-center sm:justify-start items-center">
          <MapPinIcon className="h-5 mr-1 " />
          <p className="border-r-2 pr-2 border-gray-300">{state.countryName}</p>
          <InformationCircleIcon className="h-3 mr-1 text-black  dark:text-gray-300" />
          <p className="font-bold text-black dark:text-gray-300">
            {state.city}
          </p>
          <p className=" text-blue-600">{state.ip}</p>
        </div>
        <div className="flex justify-center sm:justify-end items-center mt-4 sm:m-0">
          Created with <HeartIcon className="h-5 mx-1 text-red-500" /> by @MSOBKYY
          <a className="px-2" href="https://github.com/msobkyy">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                className="dark:fill-white"
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 px-8 py-3 grid-flow-row-dense">
        <div className="flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2 ">
          <GlobeAltIcon className="h-5 mr-1 text-green-600" />
          Carbon netral since 2007
        </div>
        <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start text-sm">
          <a
            href="https://www.google.com.eg/intl/en/ads/"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            Advertising
          </a>
          <a
            href="https://www.google.com/services/"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            Business
          </a>
          <a
            href="https://google.com/search/howsearchworks"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            How Search works
          </a>
        </div>
        <div className="flex justify-center space-x-8 md:ml-auto">
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            Privcy
          </a>
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            Terms
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="link">
            Setting
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
