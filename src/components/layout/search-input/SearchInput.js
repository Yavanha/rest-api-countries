import { useEffect } from "react"
import useInput from "../../../hooks/use-input"
import { useDispatch } from "react-redux"
import {fetchCountries } from "../../../store/country-slice"
import SearchIcon from "../../UI/icons/SearchIcon"
import Input from "../../UI/Input"
import classes from "./SearchInput.module.css"



const SearchInput = props => {

    
    const { value: searchValue, changeHandler: searchChangeHandler } = useInput()
    const dispatch = useDispatch()
    useEffect(() => {

        if (searchValue.trim() !== '') {
            dispatch(fetchCountries(`https://restcountries.com/v3.1/name/${searchValue}`))
        }
        else
            dispatch(fetchCountries('https://restcountries.com/v3.1/all'))
    }, [searchValue, dispatch])


    return <div className={classes['search-input']}>
        <SearchIcon height='20' width='20' color='#FFFFFF' />
        <Input className={classes.input} value={searchValue} onChange={searchChangeHandler} placeholder='Search for a country...' />
    </div>
}

export default SearchInput