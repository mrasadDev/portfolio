import React from "react";

export interface Props {
  icon?: string;
  title?: string;
  description?: string;
}

function ServiceItemV2({ icon, title, description }: Props) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate">
      <div className="service service__style--1 bg-color-blackest radius text-center rbt-border">
        <div className="icon">
          <i className={icon}></i>
        </div>
        <div className="content">
          <h4 className="title w-600">{title}</h4>
          <div className="description b1 color-gray mb--0">{description}</div>
        </div>
      </div>
    </div>
  );
}

export default ServiceItemV2;
