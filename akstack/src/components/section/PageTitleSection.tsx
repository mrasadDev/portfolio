import React from "react";

export interface Props {
  title?: string;
  description?: string;
}

function PageTitleSection({ title, description }: Props) {
  const limitHeadingStyle = {
    width: "70vw",
  };

  const centreTextStyle = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  };

  return (
    <div>
      <div
        className="section-title text-center sal-animate rainbow-section-gapTop"
        data-sal="slide-up"
        data-sal-duration="400"
        data-sal-delay="150"
      >
        <h2 className="title w-600 mb--20 theme-gradient">{title}</h2>
        <div style={centreTextStyle}>
          <h4 className="title" style={limitHeadingStyle}>
            {description}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default PageTitleSection;
