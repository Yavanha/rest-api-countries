import classes from './CountryHeader.module.css'
import SearchInput from "../../layout/search-input/SearchInput"
import RegionSelect from '../../layout/region-select/RegionSelect'

const CountryHeader = props => {
    return   <header className={classes['countries-header']}>
    <SearchInput />
    <RegionSelect />
</header>
}

export default CountryHeader