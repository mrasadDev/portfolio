"use client";
import React from "react";
import "./customcursor.scss";

const CustomCursor = () => {
  const cursorSm = React.useRef(null);
  const cursorLg = React.useRef(null);
  const positionRef = React.useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  React.useEffect(() => {
    const updateMousePosition = (event) => {
      const { clientX, clientY } = event;

      positionRef.current.mouseX =
        clientX - (cursorSm.current?.clientWidth / 2 || 0);
      positionRef.current.mouseY =
        clientY - (cursorSm.current?.clientHeight / 2 || 0);
      positionRef.current.mouseX =
        clientX - (cursorLg.current?.clientWidth / 2 || 0);
      positionRef.current.mouseY =
        clientY - (cursorLg.current?.clientHeight / 2 || 0);
    };

    const isClient =
      typeof window !== "undefined" && typeof document != "undefined";
    if (isClient) {
      window.document?.addEventListener("mousemove", updateMousePosition);
    } else {
      console.log("Running on server");
    }

    return () => {
      if (isClient) {
        window.document?.removeEventListener("mousemove", updateMousePosition);
      } else {
        console.log("Running on server");
      }
    };
  }, []);

  React.useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);
      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;
      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
        if (
          Math.abs(positionRef.current.distanceX) +
            Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }
      if (cursorSm.current && cursorLg.current) {
        cursorSm.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
        cursorLg.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
      }
    };
    followMouse();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => cancelAnimationFrame(positionRef.current.key);
  }, []);

  return (
    <>
      <div className="cs-cursor_lg" ref={cursorLg}></div>
      <div className="cs-cursor_sm" ref={cursorSm}></div>
    </>
  );
};

export default CustomCursor;
