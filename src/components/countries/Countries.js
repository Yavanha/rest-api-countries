import classes from './Countries.module.css'
import Country from './country/Country'


const Countries = props => {

    return <ul className={classes.countries}>
        <li>

        <Country src="https://flagcdn.com/w320/gd.png"  alt='gd-country'/>
        </li>
    </ul>
}

export default Countries