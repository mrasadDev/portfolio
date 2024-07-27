"use client";
import Div from "../Div";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import MenuWidget from "../Widget/MenuWidget";
import Newsletter from "../Widget/Newsletter";
import "./footer.scss";
import { websiteInfo } from "../../data/website-info";

export default function Footer() {
  const copyrightLinks = [
    {
      title: "Terms of Use",
      href: "/terms-of-use",
    },
    {
      title: "Privacy Policy",
      href: "/privacy-policy",
    },
  ];

  const serviceMenu = [
    {
      title: "Product Development",
      href: "/product-development",
    },
    {
      title: "Application development",
      href: "/application-development",
    },
    {
      title: "Website Development",
      href: "/website-development",
    },
    {
      title: "MobileApp Development",
      href: "/mobileapp-development",
    },
  ];

  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <h2 className="footerHead">AK <span>Stack.ai</span></h2>
                <p>AkStack empowers businesses with innovative IT solutions. We tailor our services to your specific needs, ensuring a seamless and efficient technological experience.</p>
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <MenuWidget menuItems={serviceMenu} menuHeading="Services" />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <ContactInfoWidget title="Company" />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <Newsletter
                  title="Subscribe"
                  subtitle="Let AKStack be your trusted partner on the path to digital success."
                  placeholder="example@gmail.com"
                />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">
              © {websiteInfo.companyName} - {new Date().getFullYear()}.
            </Div>
          </Div>
          <Div className="cs-bottom_footer_right">
            <MenuWidget menuItems={copyrightLinks} variant=" cs-style2" />
          </Div>
        </Div>
      </Div>
    </footer>
  );
}
