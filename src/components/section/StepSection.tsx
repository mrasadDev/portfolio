import React from "react";
import type { TitleDescription } from "../../data/types";

export interface Props {
  preTitle?: string;
  title?: string;
  steps?: TitleDescription[];
}
function StepSection({ preTitle, title, steps }: Props) {
  return (
    <div>
      <div className="rainbow-service-area rainbow-section-gap">
        <div className="wrapper plr--150 plr_lg--30 plr_md--30 plr_sm--30">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center sal-animate"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">{preTitle}</span>
                </h4>
                <h2 className="title w-600 mb--20">{title}</h2>
              </div>
            </div>
          </div>
          <div className="row g-5 mt--5">
            {steps?.map((v, index) => (
              // eslint-disable-next-line react/jsx-key
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 sal-animate">
                <div className="service service__style--1 bg-color-blackest radius text-center rbt-border h-100">
                  <div className="content">
                    <h4 className="title w-600">{v.title}</h4>
                    <div className="description b1 color-gray mb--0">
                      {v.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepSection;
