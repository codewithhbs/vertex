import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
const About = lazy(() => import("./Pages/About/About"));
const Awards = lazy(() => import("./Pages/Awards/Awards"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));
const Faq = lazy(() => import("./Pages/FAQ/Faq"));
const FounderPage = lazy(() => import("./Pages/Founder/FounderPage"));
const Home = lazy(() => import("./Pages/Home/Home"));
const Media = lazy(() => import("./Pages/Media/Media"));
const OurService = lazy(() => import("./Pages/OurServices/OurService"));
const ServicePageRoute = lazy(
  () => import("./Pages/OurServices/ServicePageRoute"),
);

// Layout
import Layout from "./Components/Layout/Layout";

const App = () => {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("vertex-theme") === "light" ? "light" : "dark",
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("vertex-theme", theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div
            style={{
              minHeight: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "var(--bg, #080d18)",
              color: "var(--text, #ffffff)",
              fontSize: "16px",
            }}
          >
            Loading...
          </div>
        }
      >
        <Routes>
          <Route
            element={
              <Layout
                theme={theme}
                onToggleTheme={() =>
                  setTheme((currentTheme) =>
                    currentTheme === "dark" ? "light" : "dark",
                  )
                }
              />
            }
          >
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="awards" element={<Awards />} />
            <Route path="contact" element={<Contact />} />
            <Route path="faq" element={<Faq />} />
            <Route path="founder" element={<FounderPage />} />
            <Route path="media" element={<Media />} />
            <Route path="our-services" element={<OurService />} />
            <Route
              path="our-services/:serviceId"
              element={<ServicePageRoute />}
            />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
