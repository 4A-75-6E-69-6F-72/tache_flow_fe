"use client"

import ErrorComponent from "@/components/errorComponent";
import TasksPage from "@/tasksPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "next/error";

export default function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <TasksPage />
    </QueryClientProvider>
  );
}
