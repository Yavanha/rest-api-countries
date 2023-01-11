import { configureStore } from "@reduxjs/toolkit";

import CountriesReduce from './country-slice'


const store = configureStore({
    reducer : {
        countries : CountriesReduce
    }
})

export default store