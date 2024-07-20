"use client";
import React from "react";
import { steps } from "@/data/services/application-modernisation";
import { websiteInfo } from "@/data/website-info";
import PageTitleSection from "@/components/section/PageTitleSection";
import StepSection from "@/components/section/StepSection";
import Image from "next/image";

function ApplicationModernistaion() {
  return (
    <main className="page-wrapper">
      <PageTitleSection
        title="APPLICATION MODERNISATION"
        description="Modernize your legacy applications while improving application performance 3x times and reducing your cost up to 30%."
      />

      <div className="slider-area rainbow-section-gap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="thumbnail">
                <Image
                  src="/images/banner-product-development-3.jpg"
                  alt="image-slider"
                  height={700}
                  width={700}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="inner Collaborate-inner text-left">
                <h3 className="title">Application Modernisation</h3>
                <div className="description">
                  Legacy applications often cause numerous headaches for
                  businesses, ranging from slow performance and a poor user
                  experience, to operational inefficiencies and spiralling
                  costs. And that’s just the tip of the iceberg.
                </div>
                <div className="description">
                  Outdated systems can also limit your digital capabilities and
                  reduce the pace of innovation, stalling business growth and
                  making it difficult to compete.
                </div>
                <div className="description">
                  Whether you’re seeking to modernise existing software or build
                  a brand new digital platform, we can help.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rbt-feature-area rainbow-section-gap">
        <div className="container">
          <div className="row row--20 align-items-center">
            <div className="col-lg-4 col-md-4">
              <h4 className="theme-gradient">Why Us</h4>
              <h2 className="title w-600 mb--20">
                Why Choose {websiteInfo.companyName} as Your Application
                Modernisation Partner?
              </h2>
            </div>
            <div className="col-lg-6 col-md-8">
              <div className="description b1">
                At {websiteInfo.companyName}, we modernise applications using
                leading-edge technologies, development practices and delivery
                processes to create future-ready enterprise solutions that
                accelerate business outcomes.
              </div>
              <div className="description b1">
                We help organisations break down complexity and unravel siloed
                legacy systems, transforming them into uncompromising, elegant
                software solutions that enhance, accelerate and streamline
                business functions.
              </div>
              <div className="description b1">
                No matter your business challenge, our expert engineers work
                collaboratively within your teams to identify and apply the
                right technologies to deliver maximum impact.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rainbow-timeline-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center sal-animate"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Our Process</span>
                </h4>
                <h2 className="title w-600 mb--20">
                  Our Application Re-Engineering Process
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 offset-lg-1 mt--50">
              <div className="timeline-style-two bg-color-blackest">
                <div className="row row--0">
                  <div className="col-lg-2 col-md-2 rainbow-timeline-single">
                    <div className="rainbow-timeline">
                      <h6
                        className="title sal-animate"
                        data-sal="slide-up"
                        data-sal-duration="700"
                        data-sal-delay="200"
                      >
                        Analysis
                      </h6>
                      <div className="progress-line">
                        <div className="line-inner"></div>
                      </div>
                      <div className="progress-dot">
                        <div className="dot-level">
                          <div className="dot-inner"></div>
                        </div>
                      </div>
                      <div
                        className="description sal-animate"
                        data-sal="slide-up"
                        data-sal-duration="700"
                        data-sal-delay="300"
                      >
                        Analysis, assessment and identification
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 rainbow-timeline-single">
                    <div className="rainbow-timeline">
                      <h6
                        className="title sal-animate"
                        data-sal="slide-up"
                        data-sal-duration="700"
                        data-sal-delay="200"
                      >
                        Development
                      </h6>
                      <div className="progress-line">
                        <div className="line-inner"></div>
                      </div>
                      <div className="progress-dot">
                        <div className="dot-level">
                          <div className="dot-inner"></div>
                        </div>
                      </div>
                      <div
                        className="description sal-animate"
                        data-sal="slide-up"
                        data-sal-duration="700"
                        data-sal-delay="300"
                      >
                        Development of a re-engineering plan
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 rainbow-timeline-single">
                    <div className="rainbow-timeline">
                      <h6
                        className="title sal-animate"
                        data-sal="slide-up"
                        data-sal-duration="700"
                        data-sal-delay="200"
                      >
                        Design
                      </h6>
                      <div className="progress-line">
                        <div className="line-inner"></div>
                      </div>
                      <div className="progress-dot">
                        <div className="dot-level">
                          <div className="dot-inner"></div>
                        </div>
                      </div>
                      <div
                        className="description sal-animate"
                        data-sal="slide-up"
                        data-sal-duration="700"
                        data-sal-delay="300"
                      >
                        Design of the new application architecture
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 rainbow-timeline-single">
                    <div className="rainbow-timeline">
                      <h6
                        className="title sal-animate"
                        data-sal="slide-up"
                        data-sal-duration="700"
                        data-sal-delay="200"
                      >
                        Implementation
                      </h6>
                      <div className="progress-line">
                        <div className="line-inner"></div>
                      </div>
                      <div className="progress-dot">
                        <div className="dot-level">
                          <div className="dot-inner"></div>
                        </div>
                      </div>
                      <div
                        className="description sal-animate"
                        data-sal="slide-up"
                        data-sal-duration="700"
                        data-sal-delay="300"
                      >
                        Implementation of the new architecture
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 rainbow-timeline-single">
                    <div className="rainbow-timeline">
                      <h6
                        className="title sal-animate"
                        data-sal="slide-up"
                        data-sal-duration="700"
                        data-sal-delay="200"
                      >
                        QA
                      </h6>
                      <div className="progress-line">
                        <div className="line-inner"></div>
                      </div>
                      <div className="progress-dot">
                        <div className="dot-level">
                          <div className="dot-inner"></div>
                        </div>
                      </div>
                      <div
                        className="description sal-animate"
                        data-sal="slide-up"
                        data-sal-duration="700"
                        data-sal-delay="300"
                      >
                        Quality assurance and user acceptance testing
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 rainbow-timeline-single">
                    <div className="rainbow-timeline">
                      <h6
                        className="title sal-animate"
                        data-sal="slide-up"
                        data-sal-duration="700"
                        data-sal-delay="200"
                      >
                        Deployment
                      </h6>
                      <div className="progress-line">
                        <div className="line-inner"></div>
                      </div>
                      <div className="progress-dot">
                        <div className="dot-level">
                          <div className="dot-inner"></div>
                        </div>
                      </div>
                      <div
                        className="description sal-animate"
                        data-sal="slide-up"
                        data-sal-duration="700"
                        data-sal-delay="300"
                      >
                        Deployment Support and maintenance
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <StepSection
        preTitle="Our Services"
        title="Our Application Re-Engineering Services"
        steps={steps}
      />
    </main>
  );
}

export default ApplicationModernistaion;
