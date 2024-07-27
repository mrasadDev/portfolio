"use client";
import PageTitleSection from "../section/PageTitleSection";
import StepSection from "../section/StepSection";
import { steps } from "../../data/services/website-development";
import { websiteInfo } from "../../data/website-info";

function WebsiteDevelopment() {
  return (
    <main className="page-wrapper">
      <PageTitleSection
        title="WEB APP DEVELOPMENT"
        description="Power your business with future ready web apps"
      />

      <div className="slider-area rainbow-section-gap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="thumbnail">
                <img
                  src="/images/banner-product-development-4.jpg"
                  alt="image-slider"
                  height={700}
                  width={700}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="inner Collaborate-inner text-left">
                <h3 className="title">Web App Development</h3>
                <div className="description">
                  {websiteInfo.companyName} helps you go beyond your current
                  application landscape and embrace a dynamic, fast-paced
                  approach to IT. By offering a full suite of web application
                  development, modernization and management services, we can
                  help you through each stage of your application lifecycle.
                </div>
                <div className="description">
                  We harness the power of modern technologies to build custom
                  and platform-based web applications for companies to
                  digitalize their internal operations, and customer-facing
                  services. Our web applications are highly adaptable, enabling
                  the best user experience regardless of the size of their
                  screen. Deployment automation allows our web development teams
                  to deliver faster than a speeding bullet.
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
                Why Choose {websiteInfo.companyName} as Your Web Application
                Development Partner?
              </h2>
            </div>
            <div className="col-lg-6 col-md-8">
              <div className="description b1">
                At {websiteInfo.companyName}, we develop web apps using
                leading-edge technologies, development practices and delivery
                processes to create future-ready enterprise solutions that
                accelerate business outcomes.
              </div>
              <div className="description b1">
                We help organisations break down complexity and unravel siloed
                legacy systems, transforming them into uncompromising, elegant
                web solutions that enhance, accelerate and streamline business
                functions.
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

      <div className="rainbow-team-area rainbow-section-gap">
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
                  Three-step application development process.
                </h2>
              </div>
            </div>
          </div>
          <div className="row row--15">
            <div
              className="col-lg-4 col-md-6 col-12 mt--30 sal-animate"
              data-sal="slide-up"
              data-sal-duration="700"
            >
              <div className="rainbow-team team-style-default">
                <div className="inner">
                  <div className="content">
                    <div className="single-list">
                      <h4 className="price-title">Requirements Gathering</h4>
                      <ul className="plan-offer-list">
                        <li>Requirements Definition</li>
                        <li>Analyzing the requirements</li>
                        <li>Documenting the process</li>
                        <li>Provide initial design</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-12 mt--30 sal-animate"
              data-sal="slide-up"
              data-sal-duration="700"
            >
              <div className="rainbow-team team-style-default">
                <div className="inner">
                  <div className="content">
                    <div className="single-list">
                      <h4 className="price-title">Development & Testing</h4>
                      <ul className="plan-offer-list">
                        <li>Frontend & backend development</li>
                        <li>Weekly Client Feedback (SCRUM)</li>
                        <li>QA Testing</li>
                        <li>Deployment</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-12 mt--30 sal-animate"
              data-sal="slide-up"
              data-sal-duration="700"
            >
              <div className="rainbow-team team-style-default">
                <div className="inner">
                  <div className="content">
                    <div className="single-list">
                      <h4 className="price-title">Support & Maintenance</h4>
                      <ul className="plan-offer-list">
                        <li>SLA Based Support</li>
                        <li>L3 and Production Support Services</li>
                        <li>Operational support where needed</li>
                        <li>On-going Support</li>
                      </ul>
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

export default WebsiteDevelopment;
