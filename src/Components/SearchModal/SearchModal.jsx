import './SearchModal.css'
import { IoSearch } from 'react-icons/io5'
import { useSearchModal } from '../../context/searchModalContext'
import { AllPage } from '../../Data/AllPage'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const SearchModal = ({ scrollNav }) => {
  const { searchModal, setSearchModal } = useSearchModal()
  const { searchModalIsOpen, searchText } = searchModal
  const [searchResultState, setSeachResultState] = useState([])

  const getResult = () => {
    const searchResult = AllPage.filter((item) =>
      item.page.toLowerCase().includes(searchText ? searchText : null)
        ? item.page
        : null,
    )
    setSeachResultState(searchResult)
  }

  const searchHandler = (e) => {
    setSearchModal({ ...searchModal, searchText: e.target.value })
    if (searchText.length === 0) {
      setSeachResultState(false)
    }
  }

  useEffect(() => {
    let timer = setTimeout(() => getResult(), 600)
    return () => {
      clearInterval(timer)
    }
  }, [searchText])

  return (
    <main className={scrollNav ? 'onScrollSerchModal' : 'searchModal'}>
      <form>
        <input
          type="search"
          placeholder="SEARCH..."
          title="search"
          className="search input"
          value={searchText}
          onChange={(e) => searchHandler(e)}
        />
        <IoSearch className="greyText" />
      </form>
      <section className="searchResultSection">
        <small>
          <ul className="list searchResultList">
            {searchResultState
              ? searchResultState.map(({ to, page }) => {
                  return (
                    <li
                      className="searchList"
                      key={to}
                      onClick={() =>
                        setSearchModal({
                          ...searchModal,
                          searchModalIsOpen: false,
                          searchText: '',
                        })
                      }
                    >
                      <Link to={to} className="link eachSearchList">
                        {page}
                      </Link>
                    </li>
                  )
                })
              : null}
          </ul>
        </small>
      </section>
    </main>
  )
}

export { SearchModal }
