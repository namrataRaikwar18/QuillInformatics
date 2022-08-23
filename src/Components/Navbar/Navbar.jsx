import { useState } from "react";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { DesktopNav, SearchModal } from "../index";
import { useSearchModal } from "../../context/searchModalContext";
import "./Navbar.css";

const Navbar = ({ openDrawer, setOpenDrawer }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const { searchModal, setSearchModal } = useSearchModal();
  const {searchModalIsOpen} = searchModal

  const hamburgerHandler = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <>
      {scrollNav ? (
        <DesktopNav scrollNav={scrollNav} setScrollNav={setScrollNav} />
      ) : null}
      <header
        className={scrollNav ? "hide header displayFlex" : "header displayFlex"}
      >
        <img
          src="https://techindustan.com/wp-content/uploads/2016/02/tecHindustan_logo-2.png"
          alt="logo"
          className={scrollNav ? "hide logoDesktopImg" : "logoDesktopImg"}
        />
        <section className="navHeader">
          <nav
            className={
              scrollNav
                ? "hide nav linkNav displayFlex"
                : "nav linkNav displayFlex"
            }
          >
            <div className="navIcons displayFlex">
              <a href="https://www.facebook.com/techindustan" target='_blank' className="link">
              <FaFacebookF />
              </a>
              <a href="https://twitter.com/techindustan" target='_blank' className="link">
              <BsTwitter />
              </a>
              <a href="https://www.pinterest.com/techindustan/" target='_blank' className="link">
              <FaPinterestP />
              </a>
            </div>
            {searchModalIsOpen ? (
              <div
                className="navIcons crossIcon displayFlex"
                onClick={() => setSearchModal({...searchModal, searchModalIsOpen:false})}
              >
                <ImCross />
              </div>
            ) : (
              <div
                className="navIcons searchIcon displayFlex"
                onClick={() => setSearchModal({...searchModal, searchModalIsOpen:true})}
              >
                <IoSearch />
              </div>
            )}
          </nav>
          <DesktopNav scrollNav={scrollNav} setScrollNav={setScrollNav} />
          <nav
            className={
              scrollNav
                ? "hide nav hamburgerNav displayFlex"
                : "nav hamburgerNav displayFlex"
            }
          >
            <img
              src="https://techindustan.com/wp-content/uploads/2016/02/tecHindustan_logo-2.png"
              alt="logo"
              className="logo"
            />
            <div className="navIcons hamburger">
              <GiHamburgerMenu onClick={hamburgerHandler} />
            </div>
          </nav>
          {searchModalIsOpen ? <SearchModal scrollNav={scrollNav} /> : null}
        </section>
      </header>
    </>
  );
};

export { Navbar };
