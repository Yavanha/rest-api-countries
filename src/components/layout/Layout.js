import { Fragment } from "react"
import MainHeader from "./main-header/MainHeader"

import classes from './Layout.module.css'

const Layout = props => {

    return <Fragment>
        <MainHeader />
        <main className={classes['main-container']}>
            
            {props.children}
        </main>
    </Fragment>

}

export default Layout