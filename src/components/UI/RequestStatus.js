
import classes from './RequestStatus.module.css'

const RequestStatus = props => {

    const {isLoading, error} = props;


    let stateClasse = ''

    if(isLoading)
        stateClasse = classes.loading
    
    if(error)
        stateClasse = classes.error


    return <div className={`${classes['request-status']} ${stateClasse}`}> 

    </div>
}

export default RequestStatus