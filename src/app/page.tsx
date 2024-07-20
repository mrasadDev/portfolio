"use client";
import React, { useEffect } from "react";
import Card from "../components/Card";
// import FunFact from "../components/FunFact";
import Hero from "../components/Hero";
import Div from "../components/Div";
import SectionHeading from "../components/SectionHeading";
import Spacing from "../components/Spacing";
import Cta from "../components/Cta";
import LogoList from "../components/LogoList";
import MovingText from "../components/MovingText";
import PortfolioSlider from "../components/Slider/PortfolioSlider";
import PostSlider from "../components/Slider/PostSlider";
import TestimonialSlider from "../components/Slider/TestimonialSlider";
import TeamSlider from "../components/Slider/TeamSlider";
import VideoModal from "../components/VideoModal";
import TimelineSlider from "../components/Slider/TimelineSlider";
import { pageTitle } from "../components/../helper";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "../scss/index.scss";
import QnaSection from "@/components/qna/QnASection";
import CookieConsent from "../components/Cookies/index";
import { qnas } from "@/data/qnas";
import Portfolio from "@/components/Portfolio/Portfolio";

export default function Home() {
  pageTitle("Home");

  // FunFact Data
  // const funfaceData = [
  //   {
  //     title: "Global Happy Clients",
  //     factNumber: "40K",
  //   },
  //   {
  //     title: "Project Completed",
  //     factNumber: "50K",
  //   },
  //   {
  //     title: "Team Members",
  //     factNumber: "245",
  //   },
  //   {
  //     title: "Digital products",
  //     factNumber: "550",
  //   },
  // ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Start Hero Section */}
      <Hero
        subtitle="We deliver best problem solving solution for our client and provide finest finishing product in present and upcoming future."
        btnText="Start Your Project"
        btnLink="/start-your-project"
        scrollDownId="#service"
        bgVideoUrl="/videos/hero-video.mp4"
      />
      {/* End Hero Section */}

      {/* Start FunFact Section */}
      {/* <div className="container">
        <FunFact
          variant="cs-type1"
          title="Our fun fact"
          subtitle="Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
          data={funfaceData}
        />
      </div> */}
      {/* End FunFact Section */}

      {/* Start Service Section */}
      <CookieConsent />
      <Spacing lg="150" md="80" />
      <Div id="service">
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Services we can help you with"
                subtitle="What Can We Do"
                btnText="See All Services"
                btnLink="/services"
                variant=""
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Product Development"
                    link="/product-development"
                    src="/images/service_1.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Application Development"
                    link="/application-development"
                    src="/images/service_2.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Website Development"
                    link="/website-development"
                    src="/images/service_3.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Mobile Development"
                    link="/mobileapp-development"
                    src="/images/service_4.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Service Section */}

      {/* Start Portfolio Section */}
      <Spacing lg="150" md="50" />
      <Div>
        <Div className="container">
          <SectionHeading
            title="Portfolio to explore"
            subtitle="Latest Projects"
            variant="cs-style1 text-center"
            btnLink=""
          />
          <Spacing lg="90" md="45" />
        </Div>
        <Portfolio />
      </Div>
      {/* End Portfolio Section */}

      {/* Start Awards Section */}
      {/* <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_2">
        <Div className="cs-shape_2">
          <Div />
        </Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="We get multiple awards"
                subtitle="Our Awards"
                variant="cs-style1"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <TimelineSlider />
            </Div>
          </Div>
        </Div>
      </Div> */}
      {/* End Awards Section */}

      {/* Start Video Block Section */}
      <Spacing lg="130" md="70" />
      <Div className="container">
        <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
          Our agile process is ability to adapt and respond to change. Agile
          organizations view change as an opportunity, not a threat.
        </h2>
        <Spacing lg="70" md="70" />
        {/* <VideoModal
          videoSrc="https://www.youtube.com/watch?v=VcaAVWtP48A"
          bgUrl="/images/video_bg.jpeg"
        /> */}
      </Div>
      {/* End Video Block Section */}

      {/* Start Team Section */}
      {/* <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Awesome team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div>
      <Spacing lg="150" md="80" /> */}
      {/* End Team Section */}

      {/* Start Testimonial Section */}
      {/* <TestimonialSlider /> */}
      {/* End Testimonial Section */}

      {/* Start Blog Section */}
      {/* <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Explore recent publication"
                subtitle="Our Blog"
                btnText="View More Blog"
                btnLink="/blog"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <Div className="cs-half_of_full_width">
                <PostSlider />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div> */}
      {/* End Blog Section */}

      {/* Start MovingText Section */}
      {/* <Spacing lg="125" md="70" />
      <MovingText text="Our reputed world wide Clients" />
      <Spacing lg="105" md="70" /> */}
      {/* End MovingText Section */}

      {/* Start LogoList Section */}
      {/* <Div className="container">
        <LogoList />
      </Div> */}
      <Spacing lg="150" md="80" />
      {/* End LogoList Section */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Start Your Project"
          btnLink="/start-your-project"
          bgSrc="/images/cta_bg.jpeg"
          variant=""
        />
      </Div>
      {/* End CTA Section */}
      <Div className="container">
        <QnaSection
          preTitle="QUESTIONS?"
          title="Frequently Asked Questions"
          qnas={qnas}
        />
      </Div>
    </>
  );
}
