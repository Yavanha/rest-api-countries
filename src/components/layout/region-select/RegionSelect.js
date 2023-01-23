import classes from './RegionSelect.module.css'
import Dropdown from "../../UI/Dropdown"
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchCountries } from '../../../store/country-slice'


const RegionSelect = props => {


    const  [selected, setSelected]  = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        const sendRequest = () => {
            if (selected.trim() === '') return;
            dispatch(fetchCountries(`https://restcountries.com/v3.1/region/${selected}`))
        }

        sendRequest()
    }, [selected, dispatch])

    const selectChangeHandler = (selected) => {
        setSelected(selected)
    }

    const options = [

        {
            id: 'r2',
            text: 'Africa',
            value: 'africa'
        },
        {
            id: 'r3',
            text: 'America',
            value: 'america'
        },
        {
            id: 'r4',
            text: 'Asia',
            value: 'asia'
        },
        {
            id: 'r5',
            text: 'Europe',
            value: 'europe'
        },
        {
            id: 'r6',
            text: 'Oceania',
            value: 'oceania'
        },

    ]



    return <Dropdown className={classes['region-select']} options={options} id='region-select' selected={selected} onSelected={selectChangeHandler} />

}
export default RegionSelect