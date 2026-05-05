import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrandProvider } from "./gadgets/brand/BrandProvider.jsx";
import Home from "./pages/Home.jsx";
import RouteFallback from "./components/RouteFallback.jsx";

const DashboardShell = lazy(() => import("./dashboard/IntegratedDashboardApp.jsx"));

export default function App() {
  return (
    <BrandProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/app/*"
            element={
              <Suspense fallback={<RouteFallback />}>
                <DashboardShell />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </BrandProvider>
  );
}
