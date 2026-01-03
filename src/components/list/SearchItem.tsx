// Icons
import HeartIcon from '@components/icons/HeartIcon';
import InfoIcon from '@components/icons/InfoIcon';
import CashbackIcon from '@components/icons/CashbackIcon';

// CSS
import '@css/SearchItem.css';

// Helper Functions
import getCurrencySymbol from '@functions/helpers/getCurrencySymbol';

type Props = {
    searchResult: {
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
    }
    
}

const SearchItem = (props: Props) => {
 
    return (

        <div className="resultsItem">

            <div className="resultsItemLogoWrap">

                <img src={props?.searchResult?.image_url || ""} className="resultsItemLogo" />

                {(props?.searchResult?.cashback || 0) > 0 && (

                    <div className="resultsItemCashbackRibbon">
                        <CashbackIcon style={{ width: "auto", height: "16px" }} />
                        <span>Cashback</span>
                    </div>

                )}
                
                {props?.searchResult?.platform && (

                    <div className="resultsItemPlatform">
                        <img src={props?.searchResult?.platform_image_url || ""} className="" />
                        <span>{props?.searchResult?.platform || ""}</span>
                    </div>

                )}

            </div>

            <div className="resultsItemInfoWrap">

                <div>

                    <div className="resultsItemTitle">
                        <span>{props?.searchResult?.name || ""}</span>
                    </div>

                </div>

                <div>

                    <div className="resultsItemLocation">
                        <span>{props?.searchResult?.location || ""}</span>
                    </div>

                    <div className="resultsItemDiscountedPrice">
                        <span>From <span className="resultsItemDiscountedPriceLineThrough">{getCurrencySymbol(props?.searchResult?.currency || null)}{(props?.searchResult?.starting_price || 0) / 100}</span> <span className="resultsItemDiscountedPricePercent">-18%</span></span>
                    </div>

                    <div className="resultsItemPrice">
                        <span>{getCurrencySymbol(props?.searchResult?.currency || null)}{(props?.searchResult?.price || 0) / 100}</span> <span><InfoIcon style={{ maxWidth: "16px", minWidth: "16px", height: "auto" }} /></span>
                    </div>

                    {props?.searchResult?.cashback && (

                        <div className="resultsItemCashback">
                            <span>Cashback: {getCurrencySymbol(props?.searchResult?.currency || null)}{((props?.searchResult?.cashback || 0) / 100).toFixed(2)}</span>
                        </div>

                    )}

                    <div className="resultsItemWishlisted">
                        <span><HeartIcon style={{ maxWidth: "16px", minWidth: "16px", height: "auto", color: "grey" }}/></span> <span>{props?.searchResult?.wishlisted || 0}</span>
                    </div>

                </div>

            </div>

        </div>

    )
}

export default SearchItem;
