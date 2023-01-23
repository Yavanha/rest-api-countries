import { useReducer } from 'react'
import classes from './Dropdown.module.css'

import ChevronDown from './icons/ChevronDown'
import CloseCircleIcon from './icons/CloseCircleIcon'

const TOGGLE_ACTION = 'TOGGLE'
const SELECT_ACTION = 'SELECT'
const DESELECT_ACTION = 'DESELECT'
const defaultState = {
    isOpen: false,
    dropdownClasse: `${classes['dropdown-container']} ${classes['hide']}`,
    selected: ''
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

    if (action.type === DESELECT_ACTION) {
        return  {
            isOpen: false,
            dropdownClasse: `${classes['dropdown-container']} ${classes['hide']}`,
            selected: ''
        }
    }

    return defaultState
}



const Dropdown = props => {

    const [dropdown, dispatch] = useReducer(openDropdownReducer, defaultState)
    
    let iconDropdown, toggleTxt; 
    
    
    const toggleDropowndHandler = () => {
        dispatch({ type: TOGGLE_ACTION })
    }

    const deselectedChangeHandler = (e) => { 
        dispatch({ type: DESELECT_ACTION})
        props.onDeselected()
        e.stopPropagation()
    }
    
    const selectRegionHandler = (e) => {
        const value = e.target.getAttribute('value');
        const text = e.target.textContent;
        console.log(text)
        dispatch({ type: SELECT_ACTION, value: text })
        props.onSelected(value)
    }
    
    if(dropdown.selected === '') {
        iconDropdown = <ChevronDown height='20' width='20' fill='#FFFFFF' /> 
        toggleTxt= props.label;

    } else {
        iconDropdown = <CloseCircleIcon onClick={deselectedChangeHandler} height='20' width='20' fill='#FFFFFF' />
        toggleTxt = dropdown.selected
    }
    const options = props.options.map(option => (
        <li onClick={selectRegionHandler} key={option.id} value={option.value}>{option.text}</li>
    ))
    
 

    return <div className={`${classes.dropdown} ${props.className}`}>
        <button  className={classes['dropdown-toggle']} onClick={toggleDropowndHandler} ><span className={classes.text}>{toggleTxt}</span> {iconDropdown} </button>
        
       
        <div className={dropdown.dropdownClasse}>
            <ul className={`${classes['dropdown-menu']}`} value={dropdown.selected}>
                {options}
            </ul>
        </div>


    </div>
}

export default Dropdown