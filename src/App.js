import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AddItem from './components/AddItem'
import Navbar from './components/Navbar'
import NavigationButton from './components/NavigationButton'
import Resources from './components/Resources'
import SearchBar from './components/SearchBar'
import { fetchResources } from './stores'

const App = () => {
  const dispatch = useDispatch();
  const resources = useSelector(store => store.resources);

  const [page, setPage] = useState(0);

  console.log(resources)
  useEffect(() => {
    try {
      dispatch(fetchResources());
    }catch(err){
      console.log(err)
    }
  }, [dispatch]);
  
  return (
    <div>
      <Navbar page={page} setPage={setPage} />
      {
        page === 0 && (
          <>
            <NavigationButton/>
            <SearchBar />
            <Resources />
          </>
        )
      }
      {
        page === 1 && (
          <AddItem />
        )
      }
    </div>
  )
}

export default App
