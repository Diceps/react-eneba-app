// React
import { useState } from 'react'

// Components
import Navbar from './components/navbar/Navbar';
import SearchList from './components/list/SearchList';

// CSS
import './css/App.css'

const App = () => {

    /**
     * @State
     */

    const [searchResults, setSearchResults]               = useState([]);
    const [searchResultsTotal, setSearchResultsTotal]     = useState<number>(0);
    const [searchResultsLoading, setSearchResultsLoading] = useState<boolean>(false);
 
    return (
        <>

            <Navbar 
                setSearchResults={setSearchResults} 
                setSearchResultsTotal={setSearchResultsTotal}
                setSearchResultsLoading={setSearchResultsLoading}
            />
            <SearchList 
                searchResults={searchResults}
                searchResultsTotal={searchResultsTotal}
                searchResultsLoading={searchResultsLoading} 
            />

        </>
    )
}

export default App;
