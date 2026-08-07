import { BrowserRouter, Routes, Route } from "react-router";
import { SignInPage } from "./pages/SignInPage";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
}
