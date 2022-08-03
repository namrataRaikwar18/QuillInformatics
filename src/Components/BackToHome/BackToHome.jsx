import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import "./BackToHome.css";

const BackToHome = ({ page }) => {
  return (
    <ul className="backToHome displayFlex whiteText">
      <Link to="/" className="link">
        <li className="list">
          <small>HOME</small>
        </li>
      </Link>
      <IoMdArrowDropright className="primaryColorText" />
      <li className="list">
        <small>{page}</small>
      </li>
    </ul>
  );
};

export { BackToHome };
