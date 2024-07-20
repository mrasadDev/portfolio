import React from "react";

export interface Props {
  title?: string;
  description?: string;
  link?: string;
  buttonTitle?: string;
}

function CallToActionV5({ title, description, link, buttonTitle }: Props) {
  return (
    <div className="rainbow-callto-action clltoaction-style-default style-5">
      <div className="container">
        <div className="row row--0 align-items-center content-wrapper theme-shape">
          <div className="col-lg-12">
            <div className="inner">
              <div className="content text-center">
                <h2
                  className="title sal-animate"
                  data-sal="slide-up"
                  data-sal-duration="400"
                  data-sal-delay="200"
                >
                  {title}
                </h2>
                <h6
                  className="subtitle sal-animate"
                  data-sal="slide-up"
                  data-sal-duration="400"
                  data-sal-delay="300"
                >
                  {description}
                  <div
                    className="call-to-btn sal-animate"
                    data-sal="slide-up"
                    data-sal-duration="400"
                    data-sal-delay="350"
                  >
                    <a className="btn-default btn-icon" href={link}>
                      {buttonTitle}
                      <i className="feather-arrow-right"></i>
                    </a>
                  </div>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style></style>
    </div>
  );
}

export default CallToActionV5;
