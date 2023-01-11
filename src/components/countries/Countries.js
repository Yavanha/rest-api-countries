import SearchInput from '../layout/search-input/SearchInput'
import classes from './Countries.module.css'
import Country from './country/Country'


const Countries = props => {

    return <div className={classes.countries}>
        <header className={classes['countries-header']}>
            <SearchInput />


        </header>
        <ul className={classes['countries-list']}>
            <li>

                <Country src="https://flagcdn.com/w320/gd.png" alt='gd-country' />

            </li>
            <li>

                <Country src="https://flagcdn.com/w320/gd.png" alt='gd-country' />
            </li>
            <li>

                <Country src="https://flagcdn.com/w320/gd.png" alt='gd-country' />
            </li>
            <li>

                <Country src="https://flagcdn.com/w320/gd.png" alt='gd-country' />
            </li>
        </ul>
    </div>

}

export default Countries