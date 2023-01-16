import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status : {
        isLoading: false,
        error: null,
    },
    theme : {
        dark : false,
        mode : 'dark'
    },
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
        },

        setThemeMode(state) { 
            state.theme.dark = !state.theme.dark
            state.theme.mode = state.theme.dark ?  'dark' : 'light'
        }
    }
})


export const uiActions = uiSlice.actions
export default uiSlice.reducer