type Props = {
    style?: object,
    fill?: string
}

const SearchIcon = (props: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        className="guWAyx"
        style={props?.style || {}}
        viewBox="0 0 24 24"
    >
    <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        clipPath="url(#svg-a569c57c2371d97aff5702b1d52a7c91__a)"
    >
        <path d="m17 17 5.75 5.75M1 10.25a9.25 9.25 0 1 0 18.5 0 9.25 9.25 0 0 0-18.5 0"></path>
    </g>
    <defs>
        <clipPath id="svg-a569c57c2371d97aff5702b1d52a7c91__a">
            <path fill="#fff" d="M0 0h24v24H0z"></path>
        </clipPath>
    </defs>
    </svg>
);

export default SearchIcon;