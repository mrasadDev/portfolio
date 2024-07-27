"use client";
import { websiteInfo } from "../../data/website-info";
import { steps } from "../../data/services/digital-product-development";
import PageTitleSection from "../section/PageTitleSection";
import StepSection from "../section/StepSection";
import TabsSection from "../Tabs/TabsSection";

function ProductDevelopment() {
  return (
    <main className="page-wrapper">
      <PageTitleSection
        title="PRODUCT DEVELOPMENT"
        description="Reduce the time to market and bring your vision to life."
      />

      <div className="slider-area rainbow-section-gap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="thumbnail">
                <img
                  src="/images/banner-product-development.jpg"
                  alt="image-slider"
                  height={700}
                  width={700}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="inner Collaborate-inner text-left">
                <h3 className="title">Product Development</h3>
                <div className="description">
                  Having a great idea for a digital product or solution is one
                  thing, but defining and implementing the roadmap to realise
                  your vision can be a real challenge.
                </div>
                <div className="description">
                  Large organisations often have trouble aligning all
                  stakeholders on the vision and acquiring the skills to create
                  a scalable solution. Many simply don’t have the capacity to
                  build a new digital product and take it to market quickly.
                </div>
                <div className="description">
                  At {websiteInfo.companyName}, we rapidly define, design,
                  architect and engineer fast, scalable and secure
                  enterprise-grade digital products to accelerate business
                  outcomes.
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
                Why Choose {websiteInfo.companyName} as Your Product Development
                Partner?
              </h2>
            </div>
            <div className="col-lg-6 col-md-8">
              <div className="description b1">
                At {websiteInfo.companyName}, we believe that when it comes to
                creating a new digital product, you should build it once and
                build it right.
              </div>
              <div className="description b1">
                From concept to consumer, our agile delivery teams combine deep
                architecture, design, engineering and product strategy with
                modern technologies, processes and practices to build digital
                products rapidly.
              </div>
              <div className="description b1">
                We define performance, scalability, security, privacy and
                accessibility requirements from the start to deliver key
                business outcomes including revenue, efficiency and customer
                satisfaction.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rainbow-tab-area rainbow-section-gap">
        <div className="container">
          <div className="row mb--40">
            <div className="col-lg-12">
              <div
                className="section-title text-center sal-animate"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Product Development</span>
                </h4>
                <h2 className="title w-600 mb--20">Our Approach</h2>
              </div>
            </div>
          </div>

          <div className="row row row--30 align-items-center">
            <div
              className="col-lg-5 sal-animate"
              data-sal="slide-right"
              data-sal-duration="700"
            >
              <img
                className="radius-small"
                src="/images/banner-product-development-2.jpg"
                alt="Corporate Template"
                height={700}
                width={700}
              />
            </div>
            <div
              className="col-lg-7 mt_md--40 mt_sm--40 order-2 order-lg-1 sal-animate"
              data-sal="slide-left"
              data-sal-duration="700"
            >
              <TabsSection />
            </div>
          </div>
        </div>
      </div>

      <StepSection
        preTitle="Our Services"
        title="What Do We Do?"
        steps={steps}
      />
    </main>
  );
}

export default ProductDevelopment;
