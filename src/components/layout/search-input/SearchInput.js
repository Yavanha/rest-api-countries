import useInput from "../../../hooks/use-input"
import SearchIcon from "../../UI/icons/SearchIcon"
import Input from "../../UI/Input"
import classes from "./SearchInput.module.css"


const SearchInput = props => {
    const {value : searchValue , changeHandler : searchChangeHandler } = useInput()

    return <div className={classes['search-input']}>
        <SearchIcon height='20' width='20' color='#FFFFFF'/>
        <Input className={classes.input} value={searchValue} onChange={searchChangeHandler} placeholder='Search for a country...'/>
    </div>
}

export default SearchInput