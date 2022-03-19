import React, { useEffect } from "react";
import ShadowTitle from "../../components/titles/shadowTitle";
import Title from "../../components/titles/Title";
import AOS from "aos";

import "./styles.scss";

const PrivacyPolicyPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1700, //Fade Animation
    });
  }, []);
  return (
    <div className="privacy">
      <ShadowTitle text="Privacy Policy . " />
      <div className="Privacy-text container">
        <div className="Information">
          <div data-aos="zoom-out-down" className="title">
            <Title text="Privacy Policy" />
          </div>
          <h5 data-aos="zoom-out-up" className="my-5">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum..
          </h5>
          <p data-aos="fade-up" className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua elit. Occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit magna aliqua sint occaecat proident
          </p>
          <p data-aos="fade-up">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua elit. Occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit magna aliqua sint occaecat proident. Lorem
            ipsum dolor Consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua elit. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum. Consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua elit.
            Occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit magna aliqua sint occaecat proident. Lorem ipsum dolor.
          </p>
          <h5 data-aos="zoom-out-up" className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </h5>
          <p data-aos="fade-up">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua elit. Occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit magna aliqua sint occaecat proident. Lorem
            ipsum dolor Consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua elit. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum. Consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua elit.
            Occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit magna aliqua sint occaecat proident. Lorem ipsum dolor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
