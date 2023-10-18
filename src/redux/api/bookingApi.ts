import { IBooking, IMeta } from "@/types";
import { baseApi } from "./baseApi";
const URL = "/bookings";

export const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addBooking: build.mutation({
      query: (data) => ({
        url: `${URL}/add`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["booking"],
    }),

    getBookingByUserId: build.query({
      query: ({ id, arg }) => {
        return {
          url: `${URL}/user/${id}`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IBooking[], meta: IMeta) => {
        return {
          services: response,
          meta,
        };
      },
      providesTags: ["booking"],
    }),

    deleteBooking: build.mutation({
      query: (id) => ({
        url: `${URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["booking"],
    }),
  }),
});

export const {
  useAddBookingMutation,
  useGetBookingByUserIdQuery,
  useDeleteBookingMutation,
} = bookingApi;
