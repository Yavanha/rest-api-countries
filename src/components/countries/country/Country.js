import classes from './Country.module.css'

import Card from "../../UI/Card"


const Country = props => {
    
    const {name, population, capital, flags, region} = props.data
    return <Card className={classes.country}>
        <div className={classes['country-img']}>
            <img src={flags.png} alt={`The flag of ${name.official}`} />
        </div>
        <div className={classes['country-info']}>
            <h4>{name.official}</h4>
            <ul className={classes['list-infos']}>
                
                <li><span className={classes['legend-info']} >Population</span>: {population}</li>
                <li><span className={classes['legend-info']}>Region:</span> {region}</li>
                {capital && <li><span className={classes['legend-info']}>Capital:</span> {capital[0]}</li>}
            </ul>
        </div>
    </Card>
}

export default Country