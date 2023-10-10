import { configureStore } from "@reduxjs/toolkit";
import { muvirAPI } from "./API/muvir.api";

export const store = configureStore({
    reducer: {
        [muvirAPI.reducerPath]: muvirAPI.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(muvirAPI.middleware),
    devTools: false
});

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>