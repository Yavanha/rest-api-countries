import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status : {
        isLoading: false,
        error: null,

    }
}

const uiSlice = createSlice ({
    name: 'ui',
    initialState,
    reducers: {
        setLoading(state, action) {
            console.log('setLoading');
            state.status.isLoading = action.payload
        },

        setError(state, action) {
            state.status.error = action.payload
        }
    }
})


export const uiActions = uiSlice.actions
export default uiSlice.reducer