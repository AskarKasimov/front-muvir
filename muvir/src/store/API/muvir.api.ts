import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IEvent, IGetEvents } from "./models.api";

export const muvirAPI = createApi({
    reducerPath: "API",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://api.мувыр.рф/v1",
        prepareHeaders: (headers) => {
            let token = "";
            try {
                document.cookie.split("; ").forEach(elem => elem.slice(0, 6) === "token=" ? token = decodeURIComponent(elem.slice(6)) : null);
            }
            catch {
                return headers;
            }
            headers.set("Authorization", token);
            return headers;
        }
    }),
    endpoints: build => ({
        getEvents: build.query<IEvent[], IGetEvents>({
            query: (params) => ({
                url: "event",
                method: "GET",
                params: params,
            })
        }),
        getEventByID: build.query<IEvent, number>({
            query: (id) => ({
                url: "event/" + id,
                method: "GET",
            })
        })
    })
})

export const {
    useGetEventsQuery,
    useGetEventByIDQuery,
} = muvirAPI;