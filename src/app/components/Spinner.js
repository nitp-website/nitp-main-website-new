const Spinner = () => {
    return (
        <svg
            version="1.1"
            id="L1"
            height="150px"
            width="150px"
            viewBox="0 0 100 100"
            enableBackground="new 0 0 100 100"
        >
            <circle
                fill="none"
                stroke="#f87171"
                strokeWidth="6"
                strokeMiterlimit="15"
                strokeDasharray="14.2472,14.2472"
                cx="50"
                cy="50"
                r="47"
            >
                <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="rotate"
                    dur="5s"
                    from="0 50 50"
                    to="360 50 50"
                    repeatCount="indefinite"
                />
            </circle>
            <circle
                fill="none"
                stroke="#f87171"
                strokeWidth="1"
                strokeMiterlimit="10"
                strokeDasharray="10,10"
                cx="50"
                cy="50"
                r="39"
            >
                <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="rotate"
                    dur="5s"
                    from="0 50 50"
                    to="-360 50 50"
                    repeatCount="indefinite"
                />
            </circle>
        </svg>
    );
}

export default Spinner;