"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaApple,
} from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import Container from "../Container";
import SocialButton from "./SocialButton";
import LinkTag from "../LinkTag";
import Subscribe from "../inputs/Subscribe";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-fit bg-[#20262E] text-sm text-white">
      <Container>
        <div className="w-full xl:px-32 flex flex-col">
          <div className="py-6 flex justify-center md:justify-end items-center">
            <div className="flex flex-row gap-4 items-center">
              <div className="font-bold">Follow us</div>
              <div className="flex flex-row gap-2 justify-between items-center">
                <SocialButton
                  link="https://twitter.com/home"
                  icon={FaFacebookF}
                />
                <SocialButton
                  link="https://twitter.com/home"
                  icon={FaTwitter}
                />
                <SocialButton
                  link="https://twitter.com/home"
                  icon={FaInstagram}
                />
                <SocialButton
                  link="https://twitter.com/home"
                  icon={FaLinkedinIn}
                />
              </div>
            </div>
          </div>
          <div className="py-14 px-5 flex flex-col md:flex-row gap-16 md:gap-6 lg:gap-28 justify-between items-start border-t-[1px] border-gray-700">
            <div className="flex flex-col md:flex-row gap-12 md:gap-6 lg:gap-28 items-start">
              <div className="flex flex-col gap-6 items-start">
                <div className="font-bold">Popular Search</div>
                <div className="flex flex-col gap-3 items-start">
                  <LinkTag title="Apartment for Sale" link="/" />
                  <LinkTag title="Apartment for Rent" link="/" />
                  <LinkTag title="Offices for Sale" link="/" />
                  <LinkTag title="Offices for Rent" link="/" />
                </div>
              </div>
              <div className="flex flex-col gap-6 items-start">
                <div className="font-bold">Quick Links</div>
                <div className="flex flex-col gap-3 items-start">
                  <LinkTag title="Terms of Use" link="/" />
                  <LinkTag title="Privacy Policy" link="/" />
                  <LinkTag title="Pricing Plans" link="/" />
                  <LinkTag title="Our Services" link="/" />
                  <LinkTag title="Contact" link="/" />
                  <LinkTag title="Careers" link="/" />
                  <LinkTag title="FAQs" link="/" />
                </div>
              </div>
              <div className="flex flex-col gap-6 items-start">
                <div className="font-bold">Discovery</div>
                <div className="flex flex-col gap-3 items-start">
                  <LinkTag title="Chicago" link="/" />
                  <LinkTag title="Los Angeles" link="/" />
                  <LinkTag title="New Jersey" link="/" />
                  <LinkTag title="New York" link="/" />
                  <LinkTag title="California" link="/" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8 items-start">
              <div className="flex flex-row gap-12 justify-between items-center">
                <div className="flex flex-col gap-2 items-start">
                  <div className="text-gray-400">Toll Free Customer Care</div>
                  <div className="font-bold">+(088) 123 456 789</div>
                </div>
                <div className="flex flex-col gap-2 items-start">
                  <div className="text-gray-400">Live Support?</div>
                  <div className="font-bold">hi@homr.com</div>
                </div>
              </div>
              <div className="w-full flex flex-col gap-3 items-start">
                <div className="font-bold">Keep Yourself Up to Date</div>
                <Subscribe onSubmit={() => {}} />
              </div>
              <div className="flex flex-col gap-3 items-start">
                <div className="font-bold">Apps</div>
                <div className="flex flex-col gap-4 items-start">
                  <Link
                    href="/"
                    target="blank"
                    className="w-[11.2rem] py-2 px-6 flex flex-row gap-4 justify-start items-center bg-gray-800 hover:bg-gray-900 rounded-md"
                  >
                    <FaApple size={22} />
                    <div className="flex flex-col items-start">
                      <div className="text-gray-400 text-xs font-thin">
                        Download on the
                      </div>
                      <div className="text-xs font-semibold">Apple Store</div>
                    </div>
                  </Link>
                  <Link
                    href="/"
                    target="blank"
                    className="w-[11.2rem] py-2 px-6 flex flex-row gap-4 justify-start items-center bg-gray-800 hover:bg-gray-900 rounded-md"
                  >
                    <IoLogoGooglePlaystore size={22} />
                    <div className="flex flex-col items-start">
                      <div className="text-gray-400 text-xs font-thin">
                        Get it on
                      </div>
                      <div className="text-xs font-semibold">Google Play</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="py-6 flex flex-row justify-end items-center border-t-[1px] border-gray-700">
            <div className="flex flex-row gap-2 items-center">
              <LinkTag title="Privacy" link="/" />
              <span className="text-[3px] text-white">&#9899;</span>
              <LinkTag title="Terms" link="/" />
              <span className="text-[3px] text-white">&#9899;</span>
              <LinkTag title="Sitemap" link="/" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
