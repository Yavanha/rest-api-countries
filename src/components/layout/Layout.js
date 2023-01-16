import { Fragment } from "react"
import MainHeader from "./main-header/MainHeader"

import classes from './Layout.module.css'
import { useSelector } from "react-redux"

const Layout = props => {

    const theme = useSelector(state => state.ui.theme.mode)

    const classesLayout = `${classes['main-container']} ${classes[theme]}`
    return <Fragment>
        <MainHeader />
        <main className={classesLayout}>
            {props.children}
        </main>
    </Fragment>

}

export default Layout