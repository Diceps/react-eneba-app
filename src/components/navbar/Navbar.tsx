// React
import { useState, useEffect } from 'react'

// Axios
import axios from 'axios';

// Icons
import SearchIcon from '@components/icons/SearchIcon'
import TimesIcon from '@components/icons/TimesIcon';
import HeartIcon from '@components/icons/HeartIcon';
import CartIcon from '@components/icons/CartIcon';

// CSS
import '@css/Navbar.css'

// Types
type Props = any;

const Navbar = (props: Props) => {

    /**
     * @State
     */

    const [searchInput, setSearchInput] = useState<string>("");


    /**
     * @Effect - to fetch all the results on initial load
     */

    useEffect(() => {

        formSearch();

    }, []);


    /**
     * Form control - make an API call to fetch the results based on
     * the search query and set the States accordingly
     */

    const formSearch = () => {

        props.setSearchResultsLoading(true);

        axios.get("https://phpstack-1570365-6112475.cloudwaysapps.com/list/", {
                params: {
                    search: searchInput
                }
            })
            .then((res) => {

                props.setSearchResultsTotal(res?.data?.count || 0);
                props.setSearchResults(res?.data?.results || []);

            })
            .catch((error) => {
                console.error("API error:", error);
            })
            .finally(() => {
                props.setSearchResultsLoading(false);
            });


    }


    return (
        <>
            <header className="navbarHeader">

                <div className="navbarWrap">

                    <div className="navbarWrapFirstSection">

                        <div className="navbarLogoWrap">
                            <img className="navbarLogo" src="/react-eneba-app/assets/images/logoFull.svg" alt="Eneba logo" />
                        </div>

                        <div className="navbarSearchFormWrap">

                            <SearchIcon fill="#b3aac9" style={{ maxWidth: "24px", minWidth: "24px", height: "auto" }} />

                            <form className="navbarSearchForm" action={formSearch}>

                                <div>
                                    <input type="text" name="searchQuery" placeholder="Search..." value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
                                </div>

                            </form>

                            <button type="button" className="cleanButton" onClick={() => setSearchInput("")}>
                                <TimesIcon style={{ maxWidth: "16px", minWidth: "16px", height: "auto" }} fill="#b3aac9" />
                            </button>

                        </div>

                        <div className="navbarLangSelectorWrap">

                            <div className="navbarLangIcon">
                                <img src="/react-eneba-app/assets/icons/lithuania.svg" alt="LT"/>
                            </div>

                            <div className="navbarLangSelector">

                                <span>English EU</span>
                                <span className="separator"></span>
                                <span>EUR</span>

                            </div>

                        </div>

                    </div>

                    <div>

                        <div className="navbarControls">

                            <div>
                                <HeartIcon style={{ maxWidth: "24px", minWidth: "24px", height: "auto" }} />
                            </div>

                            <div>
                                <CartIcon style={{ maxWidth: "24px", minWidth: "24px", height: "auto" }} />
                            </div>

                            <div>
                                <img className="navbarControlsUserImage" src="/react-eneba-app/assets/images/enebian.svg" alt="User Image" />
                            </div>

                        </div>

                    </div>

                </div>

            </header>
        </>
    )
}

export default Navbar;
