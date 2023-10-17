import { IMeta, IService } from "@/types";
import { baseApi } from "./baseApi";

const SERVICE = "/services";

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSingleService: build.query({
      query: (id: string) => ({
        url: `${SERVICE}/${id}`,
        method: "GET",
      }),
      providesTags: ["service"],
    }),

    getServices: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: SERVICE,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IService[], meta: IMeta) => {
        return {
          services: response,
          meta,
        };
      },
      providesTags: ["service"],
    }),

    createService: build.mutation({
      query: (service) => ({
        url: `${SERVICE}/add-service`,
        method: "POST",
        data: service,
      }),
      invalidatesTags: ["service"],
    }),

    deleteService: build.mutation({
      query: (id) => ({
        url: `${SERVICE}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["service"],
    }),
  }),
});

export const {
  useGetSingleServiceQuery,
  useGetServicesQuery,
  useCreateServiceMutation,
  useDeleteServiceMutation
} = serviceApi;
