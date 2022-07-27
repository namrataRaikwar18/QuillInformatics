import { FaFacebookF, FaPinterestP } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { IoSearch } from 'react-icons/io5'
import { ImCross } from 'react-icons/im'
import { GiHamburgerMenu } from 'react-icons/gi'
import './Navbar.css'
import { DesktopNav } from '../DesktopNav/DesktopNav'
import { useSearchModal } from '../../context/searchModalContext'
import { SearchModal } from '../SearchModal/SearchModal'

const Navbar = ({ openDrawer, setOpenDrawer }) => {
  const { searchModal, setSearchModal } = useSearchModal()

  const hamburgerHandler = () => {
    setOpenDrawer(!openDrawer)
  }

  return (
    <>
      <header className="header displayFlex">
        <img
          src="https://techindustan.com/wp-content/uploads/2016/02/tecHindustan_logo-2.png"
          alt="logo"
          className="logoDesktopImg"
        />
        <section className="navHeader">
          <nav className="nav linkNav displayFlex">
            <div className="navIcons displayFlex">
              <FaFacebookF />
              <BsTwitter />
              <FaPinterestP />
            </div>
            {searchModal ? (
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
            )}
          </nav>
          <DesktopNav />
          <nav className=" nav hamburgerNav displayFlex ">
            <img
              src="https://techindustan.com/wp-content/uploads/2016/02/tecHindustan_logo-2.png"
              alt="logo"
              className="logo "
            />
            <div className="navIcons hamburger">
              <GiHamburgerMenu onClick={hamburgerHandler} />
            </div>
          </nav>
          {searchModal ? <SearchModal /> : null}
        </section>
      </header>
    </>
  )
}

export { Navbar }
