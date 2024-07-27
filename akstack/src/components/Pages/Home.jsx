import React, { useEffect } from 'react';
import Card from '../Card';
import FunFact from '../FunFact';
import Hero from '../Hero';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import Cta from '../Cta';
import MovingText from '../MovingText';
import TestimonialSlider from '../Slider/TestimonialSlider';
import { pageTitle } from '../../helper';
import Portfolio from '../Portfolio/Portfolio';

export default function Home() {
  pageTitle('Home');

  // FunFact Data
  const funfaceData = [
    {
      title: 'Projects',
      factNumber: '+20 ',
    },
    {
      title: 'Clients',
      factNumber: '+10',
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Start Hero Section */}
      <Hero
        title="Academic Projects<br/>Just in SECONDS."
        subtitle=" From robust software that streamlines your business processes to stunning websites that captivate and engage your audience, I provide comprehensive digital solutions designed to enhance your online presence and boost your productivity. Partner with me to transform your ideas into reality and stay ahead in the digital age."
        btnText="Start Your Project"
        btnLink="/start-your-project"
        scrollDownId="#service"
        socialLinksHeading="Free Plagiarism"
        bgImageUrl="/images/hero_bg.jpeg"
      />
      {/* End Hero Section */}

      {/* Start FunFact Section */}
      <div className="container">
        <FunFact
          variant="cs-type1"
          title="Fun fact"
          subtitle="Discover the future of digital innovation with my cutting-edge software and website solutions. I am specialized in developing intuitive, user-friendly applications and websites tailored to your unique needs."
          data={funfaceData}
        />
      </div>
      {/* End FunFact Section */}

      {/* Start Service Section */}
      <Spacing lg="150" md="80" />
      <Div id="service">
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Services I can provide you"
                subtitle="I Can Help You With"
                btnText="See All Services"
                btnLink="/service"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Website Development"
                    link="/service/website-development"
                    src="/images/service_1.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Product Development"
                    link="/service/product-development"
                    src="/images/service_2.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Software Development"
                    link="/service/software-development"
                    src="/images/photox.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Mobile App Development"
                    link="/service/mobile-app-development"
                    src="/images/pdf.jpeg"
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
            title=""
            subtitle="Latest Projects"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
        </Div>
        <Portfolio />
      </Div>
      {/* End Portfolio Section */}


      {/* Start Testimonial Section */}
      <TestimonialSlider />
      {/* End Testimonial Section */}

      {/* Start Blog Section */}
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <Spacing lg="90" md="45" />
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Blog Section */}

      {/* Start MovingText Section */}
      <Spacing lg="125" md="70" />
      <MovingText text="Generate Automated Report Download PDF & Enjoy!" />
      <Spacing lg="105" md="70" />
      {/* End MovingText Section */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Make Partner with the Latest <br /><i>Project Development Platform</i>  "
          btnText="Apply For Meeting"
          btnLink="/start-your-project"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
