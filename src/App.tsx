import "bootstrap/dist/css/bootstrap.min.css";

import { AuthProvider } from "context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import Paths from "./routes/index.routes";
import { SpinnerProvider } from "./context/LoadingContext";

function App() {
  return (
    <BrowserRouter>
      <SpinnerProvider>
        <AuthProvider>
          <Paths />
        </AuthProvider>
      </SpinnerProvider>
    </BrowserRouter>
  );
}

export default App;
