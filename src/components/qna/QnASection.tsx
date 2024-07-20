import React from "react";
import type { QnA } from "../../data/qnas";
import QnAItem from "./QnAItem";

export interface Props {
  preTitle?: string;
  title?: string;
  qnas?: QnA[];
}

export default function QnaSection({ preTitle, title, qnas }: Props) {
  return (
    <div className="rainbow-accordion-area rainbow-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
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
        <div className="row mt--35 row--20">
          <div className="col-lg-10 offset-lg-1">
            <div className="rainbow-accordion-style rainbow-accordion-04 accordion">
              <div className="accordion" id="accordionExampled">
                {qnas?.map((qna, index) => (
                  <div key={index}>
                    <QnAItem question={qna.question} answer={qna.answer} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
