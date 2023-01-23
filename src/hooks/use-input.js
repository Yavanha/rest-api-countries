import { useState } from "react"

const useInput = (defaultValue = '') => {

    const [value, setValue] = useState(defaultValue)
    const [isTouched, setIsTouched] = useState(false)
    


    const changeHandler = (value) => {
        setValue(value)
        setIsTouched(true)
    }



    return {
        value,
        isTouched,
        changeHandler
    }
}

export default useInput