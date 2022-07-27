import './Drawer.css'
import { MdKeyboardArrowLeft } from 'react-icons/md'

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
        <li className="drawerList">Services</li>
        <li className="drawerList">About Us</li>
        <li className="drawerList">Contact Us</li>
      </ul>
    </div>
  )
}

export { Drawer }
