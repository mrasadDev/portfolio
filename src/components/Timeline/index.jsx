import React from "react";
import Div from "../Div";
import "./timeline.scss";

export default function Timeline({ columnData }) {
  return (
    <>
      {columnData.map((item, index) => (
        <Div className="cs-time_line cs-style1" key={index}>
          <h3 className="cs-accent_color">{item.year}</h3>
          <h2>{item.name}</h2>
          <div>{item.position}</div>
          <div>{item.type}</div>
        </Div>
      ))}
    </>
  );
}
