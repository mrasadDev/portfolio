import Cta from "../../components/Cta";
import Div from "../../components/Div";
import SeperatorArea from "../../components/service/SeperatorArea"
import ServiceItemV2 from "../../components/service/ServiceItemV2"
import { websiteInfo } from "../../data/website-info";

function page() {
  return (
    <>
      <main className="page-wrapper">
        <div className="container rainbow-section-gap">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center sal-animate"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">About Us</span>
                </h4>
                <h2 className="title w-600 mb--20">
                  Experience Excellence With Us!
                </h2>
                <div className="description b1">
                  {websiteInfo.companyName} is the go-to partner for numerous
                  global enterprises, SMEs, and tech innovators to maximize
                  their business value.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container rainbow-section-gapBottom">
          <div className="row g-5">
            <div className="col-lg-7">
              <h4 className="title w-600">
                {websiteInfo.companyName} provides a range of creative design
                and software development services to businesses of all sizes.
              </h4>
              <div className="description b1">
                Located in: {websiteInfo.locatedIn}
              </div>
            </div>
            <div className="col-lg-5">
              <div className="google-map-style-1">
                <iframe
                  src={websiteInfo.googleMapiFrame}
                  width="600"
                  height="420"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="container rainbow-section-gapBottom">
          <div className="row g-5">
            <ServiceItemV2
              icon="feather-target"
              title="Our Mission"
              description="Our mission is to consistently deliver value to our clients through innovative and creative digital services, and to make a positive impact on their businesses."
            />

            <ServiceItemV2
              icon="feather-eye"
              title="Our Vision"
              description="Our vision is to be a leading provider of digital product design and development on a global scale. We strive to consistently deliver top-quality work and continually improve our skills to achieve this aim."
            />

            <ServiceItemV2
              icon="feather-feather"
              title="Our Value"
              description="Commitment, community, innovation, and excellence are the values that drive Digital Solutions and inform how we conduct our business on a daily basis. These values are the foundation on which our company was built."
            />
          </div>
        </div>

        <div className="container"></div>
        <SeperatorArea />

        <Div className="container">
          <Cta
            title="Let’s disscuse make <br />something <i>cool</i> together"
            btnText="Start Your Project"
            btnLink="/start-your-project"
            bgSrc="/images/cta_bg.jpeg"
            variant=""
          />
        </Div>
      </main>
    </>
  );
}

export default page;
