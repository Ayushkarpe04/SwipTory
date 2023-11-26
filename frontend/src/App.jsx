import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import StoryPage_temp from "./screens/StoryPage_temp";
import Loder from "./loder/Loder";
import PageNotFound from "./screens/PageNotFound";

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
      <Routes>
        <Route
          path='/'
          element={<HomeScreen isMobile={isMobile} />}
        />
        <Route
          path='/test'
          element={<StoryPage_temp isMobile={isMobile} />}
        />
        {/* Wildcard route for 404 PageNotFound */}
        <Route
          path='*'
          element={<PageNotFound />}
        />

        {/* Loder */}
        <Route
          path='/loder'
          element={<Loder />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
