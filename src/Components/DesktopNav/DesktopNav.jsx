import "./DesktopNav.css";
import { IoSearch } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { useSearchModal } from "../../context/searchModalContext";
import { SearchModal, Popover } from "../index";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

const DesktopNav = ({ scrollNav, setScrollNav }) => {
  const location = useLocation();
  const { searchModal, setSearchModal } = useSearchModal();
  const [popover, setPopover] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY > 10) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <div
      className={
        scrollNav
          ? "scrollNav displayflex desktopNav"
          : "desktopNav displayflex"
      }
    >
      <ul className="desktopLinks displayFlex ">
        {scrollNav ? (
          <img
            src="	https://techindustan.com/wp-content/uploads/2017/01/techindustan-logo-sticky.jpg"
            alt="onScrolldesktopLogo"
            className="onScrolldesktopLogo logoDesktopImg"
          />
        ) : null}
        <div className="allNavLinks displayFlex">
          <div
            onMouseEnter={() => setPopover(true)}
            onMouseLeave={() => setPopover(false)}
            className="serviceActive"
          >
            <li className="list services ">
              {location.pathname === "/about-us" ||
              location.pathname === "/contact-us" ||
              location.pathname === "/" ? (
                <a
                  href=""
                  onClick={(e) => e.preventDefault()}
                  className="link navLinks"
                >
                  Services
                </a>
              ) : (
                <NavLink to="#" className="link navLinks">
                  Services
                </NavLink>
              )}
            </li>
            {popover ? (
              <Popover
                scrollNav={scrollNav}
                popover={popover}
                setPopover={setPopover}
              />
            ) : null}
          </div>
          <li className="list ">
            <NavLink to="/about-us" className="link navLinks">
              About Us
            </NavLink>
          </li>
          <li className="list ">
            <NavLink to="/contact-us" className="link navLinks">
              Contact Us
            </NavLink>
          </li>
          {scrollNav ? (
            searchModal ? (
              <div
                className="navIcons crossIcon displayFlex"
                onClick={() => setSearchModal(false)}
              >
                <ImCross />
              </div>
            ) : (
              <div
                className="navIcons searchIcon displayFlex"
                onClick={() => setSearchModal(true)}
              >
                <IoSearch />
              </div>
            )
          ) : null}
        </div>
      </ul>

      <div className="desktopSearch">
        {searchModal ? <SearchModal scrollNav={scrollNav} /> : null}
      </div>
    </div>
  );
};

export { DesktopNav };
