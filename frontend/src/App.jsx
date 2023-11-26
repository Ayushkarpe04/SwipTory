import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import Navbar from "./screens/Navbar";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <BrowserRouter>
    <Navbar isMobile={isMobile} />
      <Routes>
        <Route
          path='/'
          element={<HomeScreen isMobile={isMobile} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
