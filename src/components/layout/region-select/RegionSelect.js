import classes from './RegionSelect.module.css'
import Dropdown from "../../UI/Dropdown"
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchCountries } from '../../../store/country-slice'
import useInput from '../../../hooks/use-input'


const RegionSelect = props => {

    const {
        value: selected,
        isTouched,
        changeHandler: setSelected
    } = useInput()

    const dispatch = useDispatch();

    useEffect(() => {
        const sendRequest = () => {
            if (!isTouched) return;
            if (selected === '' && isTouched) {
                dispatch(fetchCountries('https://restcountries.com/v3.1/all'))
            } else {
                dispatch(fetchCountries(`https://restcountries.com/v3.1/region/${selected}`))
            }
        }
        sendRequest()
    }, [selected, dispatch, isTouched])

    const selectChangeHandler = (selected) => {
        setSelected(selected)
    }

    const deselectedChangeHandler = () => {
        setSelected('')
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



    return <Dropdown label='Filter by region' className={classes['region-select']} options={options} id='region-select' selected={selected} onSelected={selectChangeHandler} onDeselected={deselectedChangeHandler} />

}
export default RegionSelect