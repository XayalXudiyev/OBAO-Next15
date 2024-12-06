import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const reservationsApi = createApi({
  reducerPath: "reservationsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/",
  }),
  endpoints: (builder) => ({
    getReservations: builder.query<any, void>({
      query: () => "sheets",
    }),
    addReservation: builder.mutation({
      query: (body) => ({
        url: "sheets",
        method: "Post",
        body: body,
      }),
    }),
  }),
})

export const { useGetReservationsQuery, useAddReservationMutation } =
  reservationsApi
