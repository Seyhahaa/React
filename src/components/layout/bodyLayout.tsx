import React from "react";
import "./style.css";

interface BodyLayoutProps {
  image: string;
  children: React.ReactNode;
  imageLeft?: Boolean;
}
const BodyLayout: React.FC<BodyLayoutProps> = (props) => {
  const { image, children, imageLeft = true } = props;
  return (
    <div className="article-layout">
      {imageLeft ? (
        <>
          <div className="image">
            <img src={image} alt="" />
          </div>
          <div className="article">{children}</div>
        </>
      ) : (
        <>
            <div className="article">{children}</div>
          <div className="image">
            <img src={image} alt="" />
          </div>
          
        </>
      )}
    </div>
  );
};
export default BodyLayout;
