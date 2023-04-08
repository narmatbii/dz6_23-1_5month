import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {dataSlice} from "../features/DataSlice";

export const store = configureStore({
    reducer: {
       [dataSlice.reduserPath]:dataSlice.reduser,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(dataSlice.middleware),
})

setupListeners(store.dispatch)