const Input = props => {

    return <input className={props.className} type={props.type} value={props.value} onChange={props.onChange}  placeholder={props.placeholder} />
}

export default Input