import { IMeta, IService } from "@/types";
import { baseApi } from "./baseApi";

const SERVICE = "/services";

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSingleService: build.query({
      query: (id) => ({
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
  }),
});

export const { useGetSingleServiceQuery, useGetServicesQuery } = serviceApi;
