import { useReducer } from 'react'
import classes from './Dropdown.module.css'

import ChevronDown from './icons/ChevronDown'

const TOGGLE_ACTION = 'TOGGLE'
const SELECT_ACTION = 'SELECT'
const defaultState = {
    isOpen: false,
    dropdownClasse: `${classes['dropdown-container']} ${classes['hide']}`,
    selected: 'Filter by region'
}
const openDropdownReducer = (state, action) => {

    if (action.type === TOGGLE_ACTION) {
        const isOpen = !state.isOpen;
        return {
            isOpen,
            dropdownClasse: isOpen ? `${classes['dropdown-container']} ${classes['down']}`
                : `${classes['dropdown-container']} ${classes['up']}`,
            selected: state.selected
        }
    }

    if (action.type === SELECT_ACTION) {
        const isOpen = !state.isOpen;
        return {
            isOpen,
            dropdownClasse: isOpen ? `${classes['dropdown-container']} ${classes['down']}`
                : `${classes['dropdown-container']} ${classes['up']}`,
            selected: action.value
        }
    }

    return defaultState
}



const Dropdown = props => {

    const [dropdown, dispatch] = useReducer(openDropdownReducer, defaultState)


    const toggleDropowndHandler = () => {
        dispatch({ type: TOGGLE_ACTION })
    }

    const selectRegionHandler = (e) => {
        const value = e.target.getAttribute('value');
        const text = e.target.textContent;
        console.log(text)
        dispatch({ type: SELECT_ACTION, value: text })
        props.onSelected(value)
    }

    const options = props.options.map(option => (
        <li onClick={selectRegionHandler} key={option.id} value={option.value}>{option.text}</li>
    ))



    return <div className={`${classes.dropdown} ${props.className}`}>
        <button  className={classes['dropdown-toggle']} onClick={toggleDropowndHandler} >{dropdown.selected} </button>
        <ChevronDown height='20' width='20' fill='#FFFFFF' />
       
        <div className={dropdown.dropdownClasse}>
            <ul className={`${classes['dropdown-menu']}`} value={dropdown.selected}>
                {options}
            </ul>
        </div>


    </div>
}

export default Dropdown