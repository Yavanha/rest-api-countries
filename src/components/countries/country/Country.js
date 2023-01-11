import classes from './Country.module.css'

import Card from "../../UI/Card"


const Country = props => {



    return <Card className={classes.country}>
        <div className={classes['country-img']}>
            <img src={props.src} alt={props.alt} />
        </div>
        <div className={classes['country-info']}>
            <h4>Brazil</h4>
            <ul className={classes['list-infos']}>
                
                <li><span className={classes['legend-info']} >Population</span>: 100000000</li>
                <li><span className={classes['legend-info']}>Region:</span> Americas</li>
                <li><span className={classes['legend-info']}>Capital:</span> Berlin</li>
            </ul>
        </div>
    </Card>
}

export default Country