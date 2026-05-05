import React, { useEffect } from "react";

// Importa el dashboard real desde "Aplicacion Dashboard/dashboard-react/src" vía alias de Vite.
import App from "@appdash/App.jsx";
import { BrandProvider } from "@appdash/header/name/BrandProvider.jsx";
import { AppointmentsProvider } from "@appdash/gadgets/appointments/AppointmentsProvider.jsx";
import { AuthProvider } from "@appdash/auth/AuthProvider.jsx";
import LoginGate from "@appdash/auth/LoginGate.jsx";
import ErrorBoundary from "@appdash/ErrorBoundary.jsx";

export default function IntegratedDashboardApp() {
  useEffect(() => {
    document.body.classList.add("is-dashboard-app");
    return () => document.body.classList.remove("is-dashboard-app");
  }, []);

  return (
    <AuthProvider>
      <ErrorBoundary>
        <LoginGate>
          <BrandProvider>
            <AppointmentsProvider>
              <App />
            </AppointmentsProvider>
          </BrandProvider>
        </LoginGate>
      </ErrorBoundary>
    </AuthProvider>
  );
}

