import "../Popover/Popover.css";
import { Link } from "react-router-dom";

const Subcategory = () => {
  return (
    <div className="subcategory">
      <ul className="list greyText">
        <Link to="/">
          <li className="subcategoryList">PHP Developer</li>
        </Link>
        <li className="subcategoryList">PHP Developer</li>
        <li className="subcategoryList">PHP Developer</li>
      </ul>
    </div>
  );
};
export { Subcategory };
