import { QueryClientProvider } from "react-query";
import { Router } from "./routes";
import { queryClient } from "./services/queryClient";

function App() {
  return (
    <main>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </main>
  );
}

export default App;
