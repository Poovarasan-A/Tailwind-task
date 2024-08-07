import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";

const queryClient = new QueryClient();

axios.interceptors.request.use((request) => {
  request.headers.channelName = "custom Comment list";
  request.headers.status = "400";
  return request;
});

axios.interceptors.response.use((response) => {
  return response;
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
