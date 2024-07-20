"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Page() {
  const [isClient, setIsClient] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const formSPreeKey = "xwpevezy";

  useEffect(() => {
    setIsClient(true);
  }, []);

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch(`https://formspree.io/f/${formSPreeKey}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Your Email has been sent successfully!", {
          autoClose: 5000,
        });
        reset();
      } else {
        toast.error("Failed to send email. Please try again.", {
          autoClose: 5000,
        });
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.", {
        autoClose: 5000,
      });
      console.error("Failed to send email:", error);
    }
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {isClient && (
        <>
          <div className="container rainbow-section-gap">
            <div className="row">
              <div className="col-lg-12">
                <div
                  className="section-title text-center sal-animate"
                  data-sal="slide-up"
                  data-sal-duration="700"
                  data-sal-delay="100"
                >
                  <h4 className="subtitle">
                    <span className="theme-gradient">LETS CHAT</span>
                  </h4>
                  <h2 className="title w-600 mb--20">Ready To Get Started?</h2>
                  <div className="description b1">
                    Send us an email and we’ll get back to you within 24 hours.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container rainbow-section-gapBottom">
            <div className="row g-5">
              <div className="col-lg-5">
                <Image
                  src="/images/contact-us2.jpg"
                  width={700}
                  height={700}
                  alt="Contact US"
                />
              </div>
              <div className="col-lg-7">
                <form
                  className="contact-form-1 rainbow-dynamic-form"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Name"
                      {...register("name", { required: true })}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Email"
                      {...register("email", { required: true })}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Subject"
                      {...register("subject", { required: true })}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      placeholder="Message"
                      {...register("message", { required: true })}
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="cs-projectSubmit_btn">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Page;
