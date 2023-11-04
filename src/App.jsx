import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import "./App.css";
import Footer from "./components/Footer/Footer";
import LoginRoutes from "./pages/Login/routes";
import UserContextProvider from "./pages/User/context";
import UserRoutes from "./pages/User/routes";
import ProtectedRoute from "./pages/User/ProtectedRoute";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <UserContextProvider>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login/*" element={<LoginRoutes />} />
              <Route path="/conta/*" element={<ProtectedRoute><UserRoutes /></ProtectedRoute>} />
            </Routes>
          </main>
          <Footer />
        </UserContextProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
