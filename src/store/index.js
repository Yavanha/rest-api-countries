import { configureStore } from "@reduxjs/toolkit";

import countriesReducer from './country-slice'
import uiReducer from "./ui-slice"


const store = configureStore({
    reducer : {
        countries : countriesReducer,
        ui : uiReducer
    }
})

export default store