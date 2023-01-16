import { Fragment } from 'react'
import MoonIcon from '../../UI/icons/MoonIcon'
import classes from './MainHeader.module.css'

import RequestStatus from '../../UI/RequestStatus'
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../../../store/ui-slice'

const MainHeader = props => {

    const { isLoading, error } = useSelector(state => state.ui.status)
    const theme = useSelector(state => state.ui.theme.mode)
    const dispatch = useDispatch()

    const darkModeChangeHandler = () => {
        dispatch(uiActions.setThemeMode())
    }

    return <Fragment>
        <header className={`${classes['main-header'] } ${classes[theme]}`}>
            <h4 className={classes['header-title']}>Where in the world?</h4>

            <button onClick={darkModeChangeHandler} className={classes['header-button']}>
                <MoonIcon height='15' width='15' color='#FFFFFF' />
                Dark Mode
            </button>
        </header>
        { (isLoading || error) && <RequestStatus isLoading={isLoading} error={error} />}

    </Fragment>
}

export default MainHeader