import React, { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const LazyComponent = React.lazy(() => import("../layouts/Comments"));

const queryClient = new QueryClient();

const Home = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense
        fallback={
          <p className="w-full h-full flex items-center justify-center">
            Loading...
          </p>
        }
      >
        <LazyComponent />
      </Suspense>
    </QueryClientProvider>
  );
};

export default Home;
