type Props = {
    style?: any,
    fill?: string
}

const TimesIcon = (props: Props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            style={{ maxWidth: "16px", minWidth: "16px", height: "auto" }}
            viewBox="0 0 14 14"
        >
        <path
            fill={props?.fill || "#fff"}
            fillRule="evenodd"
            d="M14 1.67 12.59.31 7 5.69 1.41.31 0 1.67l5.59 5.37L0 12.42l1.41 1.36L7 8.4l5.59 5.38L14 12.42 8.41 7.04z"
        ></path>
        </svg>
    )
};

export default TimesIcon;