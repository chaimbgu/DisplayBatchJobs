import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BatchJobsList } from "./components/BatchJobsList/BatchJobsList";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <div className="root">
    <BatchJobsList/>
    </div>
  </QueryClientProvider>,
);
