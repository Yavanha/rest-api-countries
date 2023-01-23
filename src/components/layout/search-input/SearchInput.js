import { useEffect } from "react"
import useInput from "../../../hooks/use-input"
import { useDispatch, useSelector } from "react-redux"
import { abortRequest, fetchCountries } from "../../../store/country-slice"
import SearchIcon from "../../UI/icons/SearchIcon"
import Input from "../../UI/Input"
import classes from "./SearchInput.module.css"



const SearchInput = props => {


    const { value: searchValue, isTouched: searchIsTouched, changeHandler } = useInput()
    const theme = useSelector(state => state.ui.theme.mode)
    const colorIcon = theme === 'dark' ? '#FFFFFF' : '#858585'
    const searchChangeHandler = (e) => {
        changeHandler(e.target.value)
    }
    const dispatch = useDispatch()
    useEffect(() => {

        const interval = setTimeout(() => {
            if (!searchIsTouched) return;
            if (searchValue.trim() !== '') {
                dispatch(fetchCountries(`https://restcountries.com/v3.1/name/${searchValue}`))
            }
            else
                dispatch(fetchCountries('https://restcountries.com/v3.1/all'))
        }, 300)
        return () => {
            clearInterval(interval)
            dispatch(abortRequest())
        }
    }, [searchValue, dispatch, searchIsTouched])


    return <div className={`${classes['search-input']} ${classes[theme]}`}>
        <SearchIcon height='20' width='20' color={colorIcon} />
        <Input className={`${classes.input} ${classes[theme]}`} value={searchValue} onChange={searchChangeHandler} placeholder='Search for a country...' />
    </div>
}

export default SearchInput