import React from "react";
import ImgOne from "../images/food1.jpeg";
import ImgTwo from "../images/food2.jpeg";

const Content: React.FC = () => {
  return (
    <div>
      <div className="menu-card">
        <img
          src={ImgOne}
          alt="food 1"
          className="h-full rounded mb-20 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Food 1</h2>
          <p className="mb-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit odio in blanditiis aliquam. Quaerat odio distinctio
          </p>
          <span>$16</span>
        </div>
      </div>

      <div className="menu-card">
        <img
          src={ImgTwo}
          alt="food 1"
          className="h-full rounded mb-20 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Food 2</h2>
          <p className="mb-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit odio in blanditiis aliquam. Quaerat odio distinctio
          </p>
          <span>$16</span>
        </div>
      </div>
    </div>
  );
};

export default Content;
