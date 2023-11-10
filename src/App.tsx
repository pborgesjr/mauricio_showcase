import { QueryClientProvider } from "@tanstack/react-query";
import { Router } from "./routes";
import { queryClient } from "./services";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
