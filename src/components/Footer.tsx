import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop: 
            <a 
              href="https://www.google.com/maps/search/Apple+Store/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline text-blue"
            >
              Find an Apple Store {"  "}
            </a>
            or {"  "}
            <a 
              href="https://www.apple.com/shop" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline text-blue"
            >
              other retailer {"  "}
            </a>
            near you.
          </p>
          <p className="font-semibold text-gray text-xs">
            Or call 000800-040-1966.
          </p>
        </div>
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />
        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">
            Copyright @ 2024 Apple Inc. All rights reserved.
          </p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p className="font-semibold text-gray text-xs" key={i}>
                {link}
                {"  "}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2">|</span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
