import React, { Fragment } from "react";
import Nav from "./nav";
import "./styles.css";
import Footer from "./footer";

function Home() {
  return (
    <Fragment>
      <Nav />
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="grid grid-cols-1">
          <div className="grid grid-cols-2 h-screen">
            <p className="flex justify-center items-center text-4xl italic font-thin">
              Human memory is magic. <br />
              It makes us smarter.
            </p>
            <img
              className="flex justify-center items-center mx-auto my-auto"
              src="1.png"
              alt="casuu"
            />
          </div>
          <div className="grid grid-cols-2 h-screen">
            <img
              className="flex justify-center items-center mx-auto my-auto"
              src="2.png"
              alt="casuu"
            />
            <p className="flex justify-center items-center text-4xl italic font-thin">
              Forgotten is magic. <br />
              It keeps us going.
            </p>
          </div>
          <div className="grid grid-cols-2 h-screen">
            <p className="flex justify-center items-center text-4xl italic font-thin">
              Casuu is magic too. <br />
              It makes us efficient.
            </p>
            <img
              className="grid justify-center items-center mx-auto my-auto"
              src="3.png"
              alt="casuu"
            />
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default Home;
