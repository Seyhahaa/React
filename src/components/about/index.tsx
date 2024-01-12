import React from "react";
import "./style.css";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <>
      <div className="about">
        <div className="image">
          <img className="image"
            src="https://www.w3schools.com/w3images/tablesetting2.jpg"
            alt="about"
          />
        </div>
        <div className="article">
          <h1 className="title">About Catering</h1>
          <p className="sub-title">Tradition since 1889</p>
          <p className="p-normal">
            The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor
            sit amet, consectetur adipiscing elit consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.We only use seasonal ingredients.
          </p>
          <p className="p-light">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum consectetur adipiscing
            elit, sed do eiusmod temporincididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </>
  );
};
export default About;
