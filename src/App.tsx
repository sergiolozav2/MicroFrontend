import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/ui/mode-toggle";

const router = createRouter({ routeTree });
const queryClient = new QueryClient();

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ToastContainer closeOnClick />
        <div className="flex h-full flex-col bg-background">
          <RouterProvider router={router} />
        </div>
        <ModeToggle />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
