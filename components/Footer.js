import React, { useState, useEffect } from "react";
import {
  GlobeAltIcon,
  InformationCircleIcon,
  MapPinIcon,
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
      <div className="px-8 py-3 flex space-x-3 justify-start items-center">
        <MapPinIcon className="h-5 mr-1 " />

        <p className="border-r-2 pr-2 border-gray-300">{state.countryName}</p>
        <InformationCircleIcon className="h-3 mr-1 text-black  dark:text-gray-300" />
        <p className="font-bold text-black dark:text-gray-300">{state.city}</p>
        <p className=" text-blue-600">{state.ip}</p>
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
