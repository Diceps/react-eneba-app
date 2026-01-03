type Props = {
    style?: object
}

const CashbackIcon = (props: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        className="QrWHlF"
        style={props?.style || {}}
        viewBox="0 0 16 16"
    >
        <g
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            clipPath="url(#svg-18cf84541850d46718ea7beaaffdc9fc__a)"
        >
            <path d="M6.558 14.51a6.667 6.667 0 1 0-3.273-1.796l1.089 1.089M1.472 13.8h2.9v-2.9M8 5.334v5.333M5.333 8h5.333"></path>
        </g>
        <defs>
            <clipPath id="svg-18cf84541850d46718ea7beaaffdc9fc__a">
                <path fill="#fff" d="M0 0h16v16H0z"></path>
            </clipPath>
        </defs>
    </svg>
);

export default CashbackIcon;