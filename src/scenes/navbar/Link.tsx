import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Props, SelectedPage } from "./type";

export const Link = (props: Props) => {
  const lowerCasePage = props.page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <AnchorLink
      className={`${lowerCasePage === lowerCasePage ? "text-primary-500" : ""}
      transition duration-500 hover:text-primary-300`}
      href={`#${lowerCasePage}`}
      onClick={() => props.setSelectedPage(lowerCasePage)}
    >
      {props.page}
    </AnchorLink>
  );
};
