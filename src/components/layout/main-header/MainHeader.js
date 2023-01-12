import { Fragment } from 'react'
import MoonIcon from '../../UI/icons/MoonIcon'
import classes from './MainHeader.module.css'

import RequestStatus from '../../UI/RequestStatus'
import { useSelector } from 'react-redux'

const MainHeader = props => {

    const { isLoading, error } = useSelector(state => state.ui.status)


    return <Fragment>
        <header className={classes['main-header']}>
            <h4 className={classes['header-title']}>Where in the world?</h4>

            <button onClick={props.onDarkMode} className={classes['header-button']}>
                <MoonIcon height='15' width='15' color='#FFFFFF' />
                Dark Mode
            </button>
        </header>
        { (isLoading || error) && <RequestStatus isLoading={isLoading} error={error} />}

    </Fragment>
}

export default MainHeader