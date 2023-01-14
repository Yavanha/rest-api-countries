import { createSlice } from "@reduxjs/toolkit";

import { uiActions } from "./ui-slice";

const initialState = {
    items: [],
    selected : []

}


const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
        setCountries(state, action) {
            state.items = action.payload;
        },
        
        addSelected(state, action) {
            const country = action.payload;
            state.selected.push(country);
        },

        removeSelected(state) {
            state.selected.pop()
        }

    }

})




export const countryActions = countrySlice.actions;



let controller, signal;

export const abortRequest = () => {
    return (dispatch) => {
        if (controller)
            controller.abort()
        dispatch(uiActions.setLoading(false))
        dispatch(uiActions.setError(null))
    }

}

export const fetchCountries = (url) => {

    return async (dispatch) => {
        dispatch(uiActions.setLoading(true))
        dispatch(uiActions.setError(null))
        const sendRequest = async () => {
            controller = new AbortController()
            signal = controller.signal
            try {
                const response = await fetch(url, { method: 'GET', signal })
                if (!response.ok)
                    throw new Error('Something went wrong');

                const datas = response.json();

                return datas;

            } catch (err) {
                
            }

            return []
            

        }

        try {

            const items = await sendRequest()
            dispatch(countryActions.setCountries(items))
        } catch (error) {
            console.log({ error })
            dispatch(uiActions.setError(error.message))

        }

        dispatch(uiActions.setLoading(false))

    }
}


export default countrySlice.reducer