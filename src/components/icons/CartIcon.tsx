type Props = {
    style: any
}

const CartIcon = (props: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        style={props.style}
        viewBox="0 0 16 16"
    >
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 12.75H5.386a1 1 0 0 1-.986-.833L2.642 1.584a1 1 0 0 0-.986-.832H1"
        ></path>
        <path
            stroke="currentColor"
            d="M10.75 14.75a.25.25 0 1 0 0-.5M10.75 14.75a.25.25 0 1 1 0-.5M5.75 14.75a.25.25 0 1 0 0-.5M5.75 14.75a.25.25 0 1 1 0-.5"
        ></path>
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.031 9.75h8.048a2 2 0 0 0 1.94-1.515l.966-3.866a.502.502 0 0 0-.485-.622H3.01"
        ></path>
    </svg>
);

export default CartIcon;