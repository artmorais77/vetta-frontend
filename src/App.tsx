import { BrowserRouter, Routes, Route } from "react-router";
import { SignInPage } from "./pages/SignInPage";
import { SignUpPage } from "./pages/SignUpPage";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<SignInPage />} />
        <Route path="/inscrever-se" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}
