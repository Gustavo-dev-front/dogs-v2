import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header />
        <main>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </main>
      <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
