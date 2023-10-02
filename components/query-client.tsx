"use client";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
interface QueryClientProps {
  children: React.ReactNode;
}
const QueryClientProvieder: React.FC<QueryClientProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryClientProvieder;
