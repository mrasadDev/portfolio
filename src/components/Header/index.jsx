"use client";
import React, { useEffect, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
import Link from "next/link";
import SocialWidget from "../Widget/SocialWidget";
import Newsletter from "../Widget/Newsletter";
import Image from "next/image";
import "./header.scss";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import Div from "../Div";
import DropDown from "./DropDown";

export default function Header({ variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase ${
          variant ? variant : ""
        } cs-sticky_header ${isSticky ? "cs-sticky_header_active" : ""}`}
      >
        <Div className="cs-main_header">
          <Div className="container">
            <Div className="cs-main_header_in">
              <Div className="cs-main_header_left">
                <Link className="cs-site_branding" href="/">
                <h2 className="footerHead">AK <span>Stack</span></h2>
                <p>Software Development agency</p>
                </Link>
              </Div>
              <Div className="cs-main_header_center">
                <Div className="cs-nav cs-primary_font cs-medium">
                  <ul
                    className="cs-nav_list"
                    style={{ display: `${mobileToggle ? "block" : "none"}` }}
                  >
                    <li className="menu-item-has-children">
                      <Link
                        href="/services"
                        onClick={() => setMobileToggle(false)}
                      >
                        What we do
                      </Link>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              href="/product-development"
                              onClick={() => setMobileToggle(false)}
                            >
                              Product Development
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/application-development"
                              onClick={() => setMobileToggle(false)}
                            >
                              Application Development
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/website-development"
                              onClick={() => setMobileToggle(false)}
                            >
                              Website Development
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/mobileapp-development"
                              onClick={() => setMobileToggle(false)}
                            >
                              Mobile App Development
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                    <li>
                      <Link
                        href="/about"
                        onClick={() => setMobileToggle(false)}
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/start-your-project"
                        className="cs-startProject-btn"
                      >
                        Start your Project
                      </Link>
                    </li>
                  </ul>
                  <span
                    className={
                      mobileToggle
                        ? "cs-munu_toggle cs-toggle_active"
                        : "cs-munu_toggle"
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </Div>
              </Div>

              <Div className="cs-main_header_right">
                <Div className="cs-toolbox">
                  <span
                    className="cs-icon_btn"
                    onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
                  >
                    <span className="cs-icon_btn_in">
                      <span />
                      <span />
                      <span />
                      <span />
                    </span>
                  </span>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </header>

      <Div
        className={
          sideHeaderToggle ? "cs-side_header active" : "cs-side_header"
        }
      >
        <button
          className="cs-close"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div
          className="cs-side_header_overlay"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div className="cs-side_header_in">
          <Div className="cs-side_header_shape" />
          <Link className="cs-site_branding" href="/">
          <h2 className="footerHead">AK <span>Stack</span></h2>
          </Link>
          <Div className="cs-side_header_box">
            <h2 className="cs-side_header_heading">
              Do you have a project in your <br /> mind? Keep connect us.
            </h2>
          </Div>
          <Div className="cs-side_header_box">
            <ContactInfoWidget title="Contact Us" withIcon />
          </Div>
          <Div className="cs-side_header_box">
            <Newsletter
              title="Subscribe"
              subtitle="Let AKStack be your trusted partner on the path to digital success."
              placeholder="example@gmail.com"
            />
          </Div>
          <Div className="cs-side_header_box">
          </Div>
        </Div>
      </Div>
    </>
  );
}
