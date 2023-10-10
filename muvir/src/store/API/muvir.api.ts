import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { } from "./models.api";

export const muvirAPI = createApi({
    reducerPath: "API",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://api.rutur.run.place/v1",
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
        // getNews: build.query<INews[], IGetNews>({
        //     query: (params) => ({
        //         url: "news",
        //         method: "GET",
        //         params: params,
        //     })
        // }),
    })
})

export const {

} = muvirAPI;