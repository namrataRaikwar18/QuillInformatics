import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Subcategory } from "../index";
import "./Popover.css";

const Popover = ({ scrollNav }) => {
  const [subcategory, setSubcategory] = useState(false);
  return (
    <div
      className={scrollNav ? "popover stickyNavPopover" : "popover normalNav"}
    >
      <ul className="list greyText">
        <small className="categoryList displayFlex">
          <NavLink to="/web-development" className="link">
            <li
              className="category displayFlex"
              onMouseEnter={() => setSubcategory(true)}
              onMouseLeave={() => setSubcategory(false)}
            >
              Web Development
              {subcategory ? <Subcategory /> : null}
            </li>
          </NavLink>
          <NavLink to="/mobile-app-development">
            <li className="category">Mobile App Development</li>
          </NavLink>
          <NavLink to="/cms-development">
            <li className="category">CMS Development</li>
          </NavLink>
          <NavLink to="/e-commerce-development" className="link">
            <li className="category">E-commerce Development</li>
          </NavLink>
        </small>
      </ul>
    </div>
  );
};

export { Popover };
