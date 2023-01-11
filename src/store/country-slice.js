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

export const fetchCountries = () => {

    return async (dispatch) => {

        const sendRequest = async () => {
            dispatch(countryActions.setLoading(true))
            const response = await fetch('https://restcountries.com/v3.1/all')
            if (!response.ok)
                throw new Error('Something went wrong');

            const datas = response.json();

            return datas;
        }

        try {

            const items = await sendRequest()
            console.log('fetchCountries ', items)
            dispatch(countryActions.setCountries(items))
        } catch (error) {
            dispatch(countryActions.setError(error.message))

        }
        dispatch(countryActions.setLoading(false))



    }
}


export default countrySlice.reducer