import MoonIcon from '../UI/icons/MoonIcon'
import classes from './MainHeader.module.css'

const MainHeader  = props => {

    return <header className={classes['main-header']}>
        <h4 className={classes['header-title']}>Where in the world</h4>
        <button className={classes['header-button']}>
            <MoonIcon height='10' width='10' color='#FFFFFF'/>
            Dark Mode
        </button>
    </header>
}

export default MainHeader