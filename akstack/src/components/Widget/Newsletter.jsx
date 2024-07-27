"use client";
import Div from "../Div";
import  { useState } from "react";
import { useForm } from "react-hook-form";

export default function Newsletter({ title, subtitle, placeholder }) {
  const { register, handleSubmit, reset } = useForm();
  const [message, setMessage] = useState("");
  const formSPreeKey = "xwpevezy";

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`https://formspree.io/f/${formSPreeKey}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setMessage("You have successfully subscribed!");
        reset();
      } else {
        setMessage("Getting error while subscribing");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
      console.error("Failed to Subcribe:", error);
    }
  };

  return (
    <>
      <p>{message}</p>
      <div>
        {title && <h2 className="cs-widget_title">{title}</h2>}
        <Div className="cs-newsletter cs-style1">
          <form
            className="cs-newsletter_form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="email"
              className="cs-newsletter_input"
              placeholder={placeholder}
              {...register("email", { required: true })}
            />
            <button className="cs-newsletter_btn">
              <span>Send</span>
            </button>
          </form>
          <Div className="cs-newsletter_text">{subtitle}</Div>
        </Div>
      </div>
    </>
  );
}
