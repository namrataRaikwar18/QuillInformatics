import './DesktopNav.css'
import { IoSearch } from 'react-icons/io5'
import { ImCross } from 'react-icons/im'
import { useSearchModal } from '../../context/searchModalContext'
import { SearchModal } from '../index'
import { Link } from 'react-router-dom'

const DesktopNav = ({ scrollNav, setScrollNav }) => {
  const { searchModal, setSearchModal } = useSearchModal()

  const scrollHandler = () => {
    if (window.scrollY > 10) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  window.addEventListener('scroll', scrollHandler)

  return (
    <div
      className={
        scrollNav
          ? 'scrollNav displayflex desktopNav'
          : 'desktopNav displayflex'
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
          <li className="list navLinks">Services</li>
          <Link to="/about-us" className="link">
            <li className="list navLinks">About Us</li>
          </Link>
          <Link to='contact-us' className='link'>
          <li className="list navLinks">Contact Us</li>
          </Link>
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
  )
}

export { DesktopNav }
