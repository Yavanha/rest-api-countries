import classes from './CountryHeader.module.css'
import SearchInput from "../../layout/search-input/SearchInput"

const CountryHeader = props => {
    return   <header className={classes['countries-header']}>
    <SearchInput />

</header>
}

export default CountryHeader