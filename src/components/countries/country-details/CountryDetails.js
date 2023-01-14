import classes from './CountryDetails.module.css'

const CountryDetails = props => {

    return <article className={classes['country-details']}>
        <header className={'back-action'}>
            <button className={classes.back}>Back</button>
        </header>
        <div className={classes['details-info']}>
            <div className={classes['details-img']}>

            </div>
            <ul className={classes['main-info']}>

            </ul>
            <ul className={classes['secondary-info']}>

            </ul>
        </div>
        <div className={classes.boundaries}>
            <button></button>
        </div>

    </article>
}

export default CountryDetails