import { createContext, useContext } from 'react'
import { useState } from 'react'

const searchModalContext = createContext()
const useSearchModal = () => useContext(searchModalContext)

const SearchModalProvider = ({ children }) => {
  
  const [searchModal, setSearchModal] = useState({searchModalIsOpen:false, searchText:""})

  return (
    <searchModalContext.Provider value={{ searchModal, setSearchModal }}>
      {children}
    </searchModalContext.Provider>
  )
}

export { SearchModalProvider, useSearchModal }
