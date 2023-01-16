import classes from './RegionSelect.module.css'
import Dropdown from "../../UI/Dropdown"
import useInput from '../../../hooks/use-input'


const RegionSelect = props => {
    

    const {value: selectValue, changeHandler: selectChangeHandler } = useInput('')
    const options = [
  
        {
            id: 'r2',
            text: 'Africa',
            value : 'africa'
        },
        {
            id: 'r3',
            text: 'America',
            value : 'america'
        },
        {
            id: 'r4',
            text: 'Asia',
            value : 'asia'
        },
        {
            id: 'r5',
            text: 'Europe',
            value : 'europe'
        },
        {
            id: 'r6',
            text: 'Oceania',
            value : 'oceania'
        },

    ]

    return <Dropdown className={classes['region-select']} options={options} id='region-select' value={selectValue} onChange={selectChangeHandler} />
 
}
export default RegionSelect