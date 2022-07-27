import './SearchModal.css'
import { IoSearch } from 'react-icons/io5'

const SearchModal = ({scrollNav}) => {
  return (
    <form className={scrollNav ? "onScrollSerchModal" : "searchModal" }>
      <input
        type="search"
        placeholder="SEARCH..."
        title="search"
        className="search input"
      />
      <IoSearch className="greyText" />
    </form>
  )
}

export { SearchModal }
