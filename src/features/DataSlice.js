import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const dataSlice = createApi({
    reducerPath: 'dataSlice',
    baseQuery: fetchBaseQuery({
        baseUrl : 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints: (builder) => ({
        getUsers: builder.query({
           query: () => '/users'

        })
    })

})
export const {useGetUsersQuery} = dataSlice