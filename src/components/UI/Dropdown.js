import classes from './Dropdown.module.css'

const Dropdown = props => {

    const options = props.options.map(option => (
        <li key={option.id} value={option.value}>{option.text}</li>
    ))

    return <div className={`${classes.dropdown} ${props.className}`}>
        <button className={classes['dropdown-toggle']}>Filter by region</button>
        <div className={classes['dropdown-container']}>
            <ul className={`${classes['dropdown-menu']}`} name={props.id} id={props.id} value={props.value} onChange={props.onChange}>
                {options}
            </ul>
        </div>


    </div>
}

export default Dropdown