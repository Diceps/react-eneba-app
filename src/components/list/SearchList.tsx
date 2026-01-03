// Components
import SearchItem from "@components/list/SearchItem";

// CSS
import '@css/SearchList.css'

type Props = {
    searchResultsLoading: boolean,
    searchResultsTotal: number,
    searchResults: {
        image_url: string,
        cashback: number,
        platform: string,
        platform_image_url: string,
        name: string,
        location: string,
        currency: string,
        starting_price: number,
        price: number,
        wishlisted: number
    }[]
}

const searchList = (props: Props) => {

    return (
        <div className="searchListWrap">

            <div className="resultsCountWrap">
                <span className="resultsCount">Results found: <b>{props.searchResultsTotal}</b></span>
            </div>

            {props.searchResultsLoading && <div>loading...</div>}

            <div className="resultsWrap">

                {props.searchResults.map((item, index) => 
                    <SearchItem key={`TODO-${index}`} searchResult={item} />
                )}

            </div>

        </div>
    )
}

export default searchList;
