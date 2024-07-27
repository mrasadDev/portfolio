
import PageTitleSection from "../section/PageTitleSection";
import StepSection from "../section/StepSection";
import { steps } from "../../data/services/mobile-development";
import { websiteInfo } from "../../data/website-info";

function MobileAppDevelopment() {
  return (
    <main className="page-wrapper">
      <PageTitleSection
        title="MOBILE APP DEVELOPMENT"
        description="We Build Apps People Love To Use"
      />

      <div className="slider-area rainbow-section-gap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="thumbnail">
                <img
                  src="/images/banner-product-development-5.jpg"
                  alt="image-slider"
                  height={700}
                  width={700}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="inner Collaborate-inner text-left">
                <h3 className="title">Mobile App Development</h3>
                <div className="description">
                  {websiteInfo.companyName} offers full-service mobile app
                  development. Whether you need design, coding, management, or
                  integration services, we will build your product from scratch
                  into a fully functioning application that meets your
                  expectations.
                </div>
                <div className="description">
                  We start with the end in mind. We dig deep to make sure we
                  understand your industry, user, and value proposition. Then we
                  define the metrics and KPIs that guide our success. We help
                  you create a product that delights your users. And we help you
                  develop a brand strategy based on extensive user research,
                  usability testing, and competitive analysis.
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
                Why Choose {websiteInfo.companyName} as Your Mobile Application
                Development Partner?
              </h2>
            </div>
            <div className="col-lg-6 col-md-8">
              <div className="description b1">
                At {websiteInfo.companyName}, we develop mobile apps using
                leading-edge technologies, development practices and delivery
                processes to create resposinve sleek looking mobile apps that
                accelerate business outcomes.
              </div>
              <div className="description b1">
                We deliver more than just apps. We deliver experiences. Our
                fast, responsive and highly scalable mobile app development will
                help you get ahead of the curve in no time!
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
                <h2 className="title w-600 mb--20">How We Do It?</h2>
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
        title="Our Mobile App Development Services"
        steps={steps}
      />
    </main>
  );
}

export default MobileAppDevelopment;
