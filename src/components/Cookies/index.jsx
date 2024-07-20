"use client";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookieConsent", "true", { expires: 365 });
    setIsVisible(false);
  };

  const handleReject = () => {
    Cookies.set("cookieConsent", "false", { expires: 365 });
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div style={styles.cookieConsent}>
      <div>
        <p>
          We use cookies to improve your experience on our site. By using our
          site, you accept our use of cookies.
        </p>
      </div>
      <div>
        <button onClick={handleAccept} style={styles.button}>
          Accept
        </button>
        <button onClick={handleReject} style={styles.button}>
          Reject
        </button>
      </div>
    </div>
  );
};

const styles = {
  cookieConsent: {
    lineHeight: "2",
    position: "fixed",
    bottom: "0px",
    left: "5px",
    right: "5px",
    padding: "56px 26px",
    background: "#000",
    display: "flex",
    color: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1000,
    zIndex: 3,
  },
  button: {
    border: "1px solid #0076b9",
    background: "#0076b9",
    color: "#fff",
    marginLeft: "10px",
    borderRadius: "20px",
    padding: "5px 12px",
  },
};

export default CookieConsent;
