import React from "react";
import "./Adcard.css";
import Link from "next/link";

const Adcard = ({ name, designation, type, url }) => {
  // Determine whether to render a clickable card or a static card
  const CardWrapper = ({ children }) => {
    if (url) {
      return (
        <Link href={url} className="card-link">
          {children}
        </Link>
      );
    }
    return <>{children}</>;
  };

  return (
    <div className="maincard my-4 md:my-0 md:mx-4">
      <CardWrapper>
        <div className="e-card playing bg-white w-4/5">
          <div className="image"></div>
          
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>

          <div className="infotop">
            <div className="name-title">{name}</div>
            <div className="designation">{designation}</div>
            <div className="type-info text-neutral-300">{type}</div>
          </div>
        </div>
      </CardWrapper>
    </div>
  );
};

export default Adcard;
