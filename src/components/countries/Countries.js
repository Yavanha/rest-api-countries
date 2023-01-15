import { Fragment, useEffect, } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classes from './Countries.module.css'
import Country from './country/Country'
import { countryActions, fetchCountries } from '../../store/country-slice'
import RequestStatus from '../UI/RequestStatus'
import CountryDetails from './country-details/CountryDetails'


const Countries = props => {

    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.ui.status.isLoading)
    const error = useSelector(state => state.ui.status.error)
    const countries = useSelector(state => state.countries.items)
    const selectedCountries = useSelector(state => state.countries.selected)



    useEffect(() => {
        if (!selectedCountries.length)
            dispatch(fetchCountries('https://restcountries.com/v3.1/all'))
    }, [dispatch, selectedCountries])


    const selectedCountryHandler = (country) => {
        dispatch(countryActions.addSelected(country))
    }



    const backToCountriesHandler = () => {
        dispatch(countryActions.removeSelected())


    }

    if (selectedCountries.length > 0) {
        const selected = selectedCountries.at(-1);
        return <CountryDetails
            onBack={backToCountriesHandler}
            country={selected} />
    }

    if (isLoading) {
        console.log('loading...')
        return <p className={classes.loading}>Loading...</p>
    }

    if (error) {
        return <p className={classes.error}>{error}</p>
    }


    if (!countries.length && !isLoading) {
        return <Fragment >
            <p className={classes['no-data']}>No countries found ! </p>
        </Fragment>
    }



    const countriesElt = (
        <Fragment>
            <ul className={classes['countries-list']}>
                {countries.map(country =>
                    <li key={country.name.official}>
                        <Country
                            data={country}
                            onSelected={selectedCountryHandler}
                            src="https://flagcdn.com/w320/gd.png"
                            alt='gd-country' />
                    </li>)}
            </ul>
        </Fragment>)

    return <div className={classes.countries}>
        <RequestStatus />
        {countriesElt}
    </div>

}

export default Countries