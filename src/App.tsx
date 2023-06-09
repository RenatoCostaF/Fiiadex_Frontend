import "bootstrap/dist/css/bootstrap.min.css";

import { AuthProvider } from "context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "context/ModalContext";
import Paths from "./routes/index.routes";
import { SpinnerProvider } from "./context/LoadingContext";

function App() {
  return (
    <BrowserRouter>
      <SpinnerProvider>
        <AuthProvider>
          <ModalProvider>
            <Paths />
          </ModalProvider>
        </AuthProvider>
      </SpinnerProvider>
    </BrowserRouter>
  );
}

export default App;
