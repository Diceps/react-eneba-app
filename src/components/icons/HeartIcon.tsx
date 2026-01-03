type Props = {
    style?: object
}

const HeartIcon = (props: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        strokeWidth="1.5"
        className="wSfDvT"
        style={props?.style || {}}
        viewBox="0 0 24 24"
    >
    <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m12 21.844-9.588-10a5.67 5.67 0 0 1-1.063-6.551h0a5.673 5.673 0 0 1 9.085-1.474L12 5.384l1.566-1.565a5.673 5.673 0 0 1 9.085 1.474h0a5.67 5.67 0 0 1-1.062 6.548Z"
    ></path>
    </svg>
);

export default HeartIcon;