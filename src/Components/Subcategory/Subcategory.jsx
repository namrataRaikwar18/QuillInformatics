import "../Popover/Popover.css";
import { Link } from "react-router-dom";

const Subcategory = ({ subcategoryList, closePopOver }) => {
  return (
    <div className="subcategory">
      <ul className="list greyText">
        {subcategoryList.map(({ to, page }) => {
          return (
            <li key={to}>
              <Link
                to={to}
                className="subcategoryList link"
                onClick={closePopOver}
              >
                {page}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export { Subcategory };
