import './Drawer.css'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Drawer = ({ setOpenDrawer }) => {
  return (
    <div className="drawer">
      <ul className="alldrawerList lightGreyText">
        <div
          className="closeDrawer displayFlex"
          onClick={() => setOpenDrawer(false)}
        >
          <MdKeyboardArrowLeft className="backArrowIcon" />
          <p className="back">Back</p>
        </div>
        <li className="list drawerList">Services</li>
        <Link to='/about-us' className='link'>
        <li className=" list drawerList">About Us</li>
        </Link> 
        <li className="list drawerList">Contact Us</li>
      </ul>
    </div>
  )
}

export { Drawer }
