/** @format */

import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://haveyoudone.com/review/api/v1/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEzLCJpYXQiOjE2MzIzNzk3MjB9.H8ZTtBiCxvvMQGbtTVQLjfWYgrhPGIx8uiBlPNTdIvI`,
  },
});

export default apiClient;
