import React from "react";
import "./style.css";
import BodyLayout from "../layout/bodyLayout";

const ourMenu = [
  {
    title: "Bread Basket",
    desc: `Assortment of fresh baked fruit breads and muffins 5.50`,
  },
  {
    title: "Honey Almond Granola with Fruits",
    desc: `Natural cereal of honey toasted oats, raisins, almonds and dates 7.00`,
  },
  {
    title: "Belgian Waffle",
    desc: `Vanilla flavored batter with malted flour 7.50`,
  },
  {
    title: "Scrambled eggs",
    desc: `Scrambled eggs, roasted red pepper and garlic, with green onions 7.50`,
  },
  {
    title: "Blueberry Pancakes",
    desc: `With syrup, butter and lots of berries 8.50`,
  },
];
interface MenuProps {}

const Menu: React.FC<MenuProps> = () => {
  return (
    <div>
      <BodyLayout image="https://www.w3schools.com/w3images/tablesetting.jpg" imageLeft={false}>
        <h1 className="title">Our Menu</h1>
        <div className="menu-list">
          {ourMenu.map((item, index) => (
            <div key={index}>
              <h3 className="menu-title">{item.title}</h3>
              <p className="desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </BodyLayout>
    </div>
  );
};
export default Menu;
