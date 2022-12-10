import { QueryClientProvider } from "react-query";
import { Router } from "./routes";
import { queryClient } from "./services";
import "react-lazy-load-image-component/src/effects/blur.css";

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
