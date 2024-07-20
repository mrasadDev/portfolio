"use client";
import React from "react";
import parse from "html-react-parser";
import "./hero.scss";
import Button from "../Button";
import Div from "../Div";
import VerticalLinks from "../VerticalLinks";
import MovingText from "./MovingText";
import { TypeAnimation } from "react-type-animation";

export default function Hero({
  subtitle,
  btnText,
  btnLink,
  scrollDownId,
  bgVideoUrl,
}) {
  // const color1 = "#059dff";
  // const color2 = "#6549d5";
  // const color3 = "#e33fa1";
  // const color4 = "#fb5343";

  // const inlineStyle = {
  //   textAlign: "center",
  //   background: `linear-gradient(
  //     95deg,
  //     ${color1} 15%,
  //     ${color2} 45%,
  //     ${color3} 75%,
  //     ${color4} 100%
  //   ) 98% / 200% 100%`,
  // };

  return (
    <div className="cs-hero cs-style1 cs-bg cs-fixed_bg cs-shape_wrap_1">
      <video
        className="background-video"
        autoPlay
        muted
        loop
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src={bgVideoUrl} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className="overlay"></div>
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="container">
        <Div className="cs-hero_text">
          {/* <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-12">
                <div class="inner text-center">
                  <h1 class="title display-one">
                    We Deliver <br />
                    <span class="header-caption">
                      <span class="cd-headline clip is-full-width">
                        <span class="cd-words-wrapper">
                          <b class="is-visible theme-gradient">
                            Software Solutions.
                          </b>
                          <b class="is-hidden theme-gradient">
                            Digital Brilliance.
                          </b>
                        </span>
                      </span>
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div> */}
          <div className="displayText">
            <div className="text-main">We Deliver</div>
            <TypeAnimation
              sequence={[
                "Software Solutions.",
                2000,
                "Digital Briliance.",
                2000,
              ]}
              repeat={Infinity}
              className="heroTextMove"
            />
          </div>
          <Div className="cs-hero_info">
            <Div className="text-center">
              <Button btnLink={btnLink} btnText={btnText} className="ml-10" />
            </Div>
            <Div>
              <Div className="cs-hero_subtitle">{subtitle}</Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <a href={scrollDownId} className="cs-down_btn">
        .
      </a>
    </div>
  );
}
