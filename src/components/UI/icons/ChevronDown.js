const ChevronDown = (props) => {

    return <svg style={{ verticalAlign: 'middle' }}
        height={`${props.height}px`}
        width={`${props.width}px`}
        xmlns="http://www.w3.org/2000/svg"
        className="ionicon"
        viewBox="0 0 512 512">
        <title>Chevron Down</title>
        <path fill={props.fill} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M112 184l144 144 144-144" />
    </svg>
}

export default ChevronDown

