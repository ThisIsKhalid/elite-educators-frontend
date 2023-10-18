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
  }),
});

export const { useAddBookingMutation } = bookingApi;
