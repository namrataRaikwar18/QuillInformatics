import './Popover.css'

const Popover = ({ scrollNav }) => {
  return (
    <div
      className={scrollNav ? 'popover stickyNavPopover' : 'popover normalNav'}
    >
      <ul className="list greyText">
        <small>
          <li className="category">Web Development</li>
          <div className="whiteDivider"></div>
          <li className="category">Mobile App Development</li>
          <li className="category">CMS Development</li>
          <li className="category">E-commerce Development</li>
        </small>
      </ul>
    </div>
  )
}

export { Popover }
