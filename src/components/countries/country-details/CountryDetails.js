import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { countryActions, fetchCountries } from '../../../store/country-slice'
import classes from './CountryDetails.module.css'

const CountryDetails = props => {
    const { flags, name, population, languages, capital, region, subregion, tld, borders, currencies } = props.country
    const nativeName = name.nativeName[Object.keys(name.nativeName).at(-1)].common
    const languagesList = Object.values(languages).toString()
    const currency = Object.values(currencies).at(0).name
    const borderCountries = useSelector(state => state.countries.items)

    const dispatch = useDispatch()

    useEffect(() => {
        if (borders)
            dispatch(fetchCountries(`https://restcountries.com/v3.1/alpha?codes=${borders.toString()}`))
    }, [borders, dispatch])


    const selectedHandler = (e) => {
    dispatch(countryActions.addSelected(borderCountries[+e.target.id]))
    }

    return <article className={classes['country-details']}>
        <header className={classes['country-header']}>
            <button onClick={props.onBack} className={classes['back-btn']}>Back</button>
        </header>
        <div className={classes['details-body']}>
            <img className={classes['details-img']} src={flags.png} alt={`Flag of ${name.common}`} />
            <div className={classes['details-infos']}>
                <h2 className={classes['details-title']}>{name.common}</h2>
                <div className={classes['list-container']}>

                    <ul className={classes['list-infos']}>
                        <li><span>Native Name:</span>{nativeName}</li>
                        <li><span>Population:</span>{population}</li>
                        <li><span>Region:</span>{region}</li>
                        <li><span>Sub Region:</span>{subregion}</li>
                        <li><span>Capital:</span>{capital}</li>
                    </ul>
                    <ul className={classes['list-infos']}>
                        <li><span>Top Level Domain:</span>{tld.at(0)}</li>
                        <li><span>Currencies:</span>{currency}</li>
                        <li><span>Languages:</span>{languagesList}</li>
                    </ul>
                </div>
                <div className={classes.borders}>
                    <h4 className={classes['borders-title']}>Border countries:</h4>
                    <div className={classes['borders-actions']}>
                        {borderCountries.slice(0, 3).map((borderCountry, i) =>
                            <button id={i} key={borderCountry.name.official} onClick={selectedHandler} className={classes['border-btn']}>{borderCountry.name.common}</button>
                        )}
                    </div>
                </div>
            </div>

        </div>


    </article>
}

export default CountryDetails