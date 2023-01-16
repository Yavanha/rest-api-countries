import classes from './Card.module.css'


const Card = props => {

    return <article className={`${classes.card} ${props.className} ${classes[props.theme]}`} onClick={props.onClick}>
        {props.children}
    </article>
}

export default Card