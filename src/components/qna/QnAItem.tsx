"use client";
import { Icon } from "@iconify/react";
import React, { useState } from "react";

export interface Props {
  question?: string;
  answer?: string;
}

function QnAItem({ question, answer }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const uniqueId = question?.replace(/[^a-zA-Z0-9]/g, "");
  const headingId = `heading${uniqueId}`;
  const collapseId = `collapse${uniqueId}`;

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item card">
      <h2
        className="accordion-header card-header d-flex justify-content-between"
        id={headingId}
      >
        <p className="mt-3">{question}</p>
        <Icon
          icon={isOpen ? "gridicons:minus" : "gridicons:plus"}
          cursor="pointer"
          onClick={toggleAccordion}
          color="#fff"
          style={{ fontSize: "20px", marginTop: "18px" }}
        />
      </h2>
      <div
        id={collapseId}
        className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
        aria-labelledby={headingId}
        data-bs-parent="#accordionExampled"
      >
        <div className="accordion-body card-body">{answer}</div>
      </div>
    </div>
  );
}

export default QnAItem;
