import { Fragment, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classes from './Countries.module.css'
import Country from './country/Country'
import { fetchCountries } from '../../store/country-slice'
import RequestStatus from '../UI/RequestStatus'
import CountryDetails from './country-details/CountryDetails'
import CountryHeader from "./country-header/CountryHeader"


const Countries = props => {

    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.countries.isLoading)
    const error = useSelector(state => state.countries.error)
    const countries = useSelector(state => state.countries.items)
    const [selected, setSelected] = useState(null)


    useEffect(() => {
        dispatch(fetchCountries('https://restcountries.com/v3.1/all'))
    }, [dispatch])

    const selectedCountryHandler = (country) => {
        setSelected(country)
    }

    const backToCountriesHandler = () => {
        setSelected(null)
    }

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>{error}</p>
    }


    if (!countries.length) {
        return <p className={classes['no-data']}>No countries found ! </p>
    }

    if (selected) {
        return <CountryDetails onBack={backToCountriesHandler} country={selected} />
    }

    const countriesElt = (
        <Fragment>
            <CountryHeader />

            <ul className={classes['countries-list']}>
                {countries.map(country => <li key={country.name.official}>
                    <Country data={country} onSelected={selectedCountryHandler} src="https://flagcdn.com/w320/gd.png" alt='gd-country' />
                </li>)}
            </ul>
        </Fragment>)

    return <div className={classes.countries}>

        <RequestStatus />
        {countriesElt}

    </div>

}

export default Countries