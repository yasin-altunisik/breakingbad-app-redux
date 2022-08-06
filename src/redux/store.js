import {configureStore} from "@reduxjs/toolkit"

import charactersSlice from "./charactersSlice"
import quotesSlice from "./charactersSlice"

export const store = configureStore({
    reducer: {
        characters: charactersSlice,
        quotes: quotesSlice,
    },
})