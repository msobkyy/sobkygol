import React from "react";
import HeaderLink from "./HeaderLink";
import {
  MagnifyingGlassIcon,
  PhotoIcon,
  VideoCameraIcon,
  NewspaperIcon,
  MapIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

function HeaderLinks() {
  const router = useRouter();
  const q = router.query.q;
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm sm:text-base lg:justify-start lg:space-x-36 lg:pl-48 border-b dark:border-secondary-dark">
      <div className="flex space-x-6 w-full justify-evenly sm:w-auto dark:text-gray-400">
        <HeaderLink
          Icon={MagnifyingGlassIcon}
          title="All"
          link={`/search?q=${q}`}
          selected={router.pathname == "/search" ? true : false}
        />
        <HeaderLink
          Icon={PhotoIcon}
          title="Images"
          link={`/images?q=${q}`}
          selected={router.pathname == "/images" ? true : false}
        />
        <HeaderLink
          Icon={VideoCameraIcon}
          title="Videos"
          link={`/videos?q=${q}`}
          selected={router.pathname == "/videos" ? true : false}
        />
        <HeaderLink
          Icon={NewspaperIcon}
          title="News"
          link={`/news?q=${q}`}
          selected={router.pathname == "/news" ? true : false}
        />
        <HeaderLink Icon={MapIcon} title="Map" link={`/search?q=${q}`} />
        <HeaderLink
          Icon={EllipsisVerticalIcon}
          title="More"
          link={`/search?q=${q}`}
        />
      </div>
      <div className=" space-x-4 hidden sm:inline-flex  dark:text-gray-400">
        <p className="link">Sitting</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
}

export default HeaderLinks;
