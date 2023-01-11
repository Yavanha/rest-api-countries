import classes from './Country.module.css'

import Card from "../../UI/Card"


const Country = props => {



    return <Card className={classes.country}>
        <div className={classes['country-img']}>
            <img src={props.src} alt={props.alt} />
        </div>
        <div className={classes['country-info']}>
            <h4>Brazil</h4>
            <ul>
                
                <li>Population: 100000000</li>
                <li>Region: Americas</li>
                <li>Capital</li>
            </ul>
        </div>
    </Card>
}

export default Country