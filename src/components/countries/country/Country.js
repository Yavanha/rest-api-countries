import classes from './Country.module.css'

import Card from "../../UI/Card"
import { useSelector } from 'react-redux'


const Country = props => {
    const theme = useSelector(state => state.ui.theme.mode)

    const selectCountryHandler = () =>{
        props.onSelected(props.data)
    }
    
    const {name, population, capital, flags, region} = props.data
    return <Card theme={theme} className={`${classes.country} ${classes[theme]}`} onClick={selectCountryHandler}>
        <div className={classes['country-img']}>
            <img src={flags.png} alt={`The flag of ${name.common}`} />
        </div>
        <div className={`${classes['country-info']} ${classes[theme]}`}>
            <h4>{name.common}</h4>
            <ul className={classes['list-infos']}>
                
                <li><span className={classes['legend-info']} >Population</span>: {population}</li>
                <li><span className={classes['legend-info']}>Region:</span> {region}</li>
                { <li><span className={classes['legend-info']}>Capital:</span>  {capital ? capital[0] : 'No Capital'}</li>}
            </ul>
        </div>
    </Card>
}

export default Country