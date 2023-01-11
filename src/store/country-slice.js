import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    isLoading: false,
    error: null,

}


const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
        setCountries(state, action) {
            state.items = action.payload;
        },
        setLoading(state, action) {
            state.isLoading = action.payload
        },

        setError(state, action) {
            state.error = action.payload
        }
    }

})




export const countryActions = countrySlice.actions;



let controller, signal;

export const fetchCountries = (url) => {

    return async (dispatch) => {
        const sendRequest = async () => {
            dispatch(countryActions.setLoading(true))
            if (controller) {
                controller.abort()
            }
            controller = new AbortController()
            signal = controller.signal
            const response = await fetch(url, { method: 'GET', signal })
            if (!response.ok)
                throw new Error('Something went wrong');

            const datas = response.json();

            return datas;
        }

        try {

            const items = await sendRequest()
            dispatch(countryActions.setCountries(items))
        } catch (error) {
            dispatch(countryActions.setError(error.message))

        }
        dispatch(countryActions.setLoading(false))
        dispatch(countryActions.setError(null))


    }
}


export default countrySlice.reducer