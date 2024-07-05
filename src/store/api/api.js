import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// json-server db.json --port 4200 --watch

const API_URL = "http://localhost:4200/recipes";

export const api = createApi({
  reducerPath: "api",
  tagTipes: ["Recipe"],
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getRecipes: builder.query({
      query: () => "/?_sort=id&_order=desc",
      providesTags: () => [{ type: "Recipe" }],
    }),
  }),
});

export const { useGetRecipesQuery } = api;
