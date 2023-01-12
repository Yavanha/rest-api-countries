import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classes from './Countries.module.css'
import Country from './country/Country'
import { fetchCountries } from '../../store/country-slice'
import RequestStatus from '../UI/RequestStatus'



const Countries = props => {

    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.countries.isLoading)
    const error = useSelector(state => state.countries.error)
    const countries = useSelector(state => state.countries.items)



    useEffect(() => {
        dispatch(fetchCountries('https://restcountries.com/v3.1/all'))
    }, [dispatch])


    if (isLoading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    let countriesElt = <p className={classes['no-data']}>No countries found ! </p>

    if (countries.length) {
         countriesElt = (<ul className={classes['countries-list']}>
            {countries.map(country => <li key={country.name.official}>
                <Country data={country} src="https://flagcdn.com/w320/gd.png" alt='gd-country' />
            </li>)}
        </ul>)
    } 



    return <div className={classes.countries}>
        <RequestStatus />
        {countriesElt}

    </div>

}

export default Countries