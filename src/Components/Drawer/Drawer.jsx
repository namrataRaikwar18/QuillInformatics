import './Drawer.css'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Drawer = ({ setOpenDrawer }) => {

  const closeDrawerHandler = () => {
    setOpenDrawer(false)
  }

  return (
    <div className="drawer">
      <ul className="alldrawerList lightGreyText">
        <div
          className="closeDrawer displayFlex"
          onClick={() => closeDrawerHandler()}
        >
          <MdKeyboardArrowLeft className="backArrowIcon" />
          <p className="back">Back</p>
        </div>
        <li className="list drawerList"  onClick={() => closeDrawerHandler()}>Services</li>
        <Link to="/about-us" className="link">
          <li className=" list drawerList"  onClick={() => closeDrawerHandler()}>About Us</li>
        </Link>
        <Link to="contact-us" className="link">
          <li className="list drawerList"  onClick={() => closeDrawerHandler()}>Contact Us</li>
        </Link>
      </ul>
    </div>
  )
}

export { Drawer }
