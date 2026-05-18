import { Alert } from "react-bootstrap";
import { API_BASE_URL } from "../../lib/api.js";

export default function ProductionApiBanner() {
  const isProd = import.meta.env.PROD;
  const isLocalApi = API_BASE_URL.includes("localhost") || API_BASE_URL.includes("127.0.0.1");

  if (!isProd || !isLocalApi) return null;

  return (
    <Alert variant="warning" className="m-3 mb-0 small">
      <strong>API en localhost en producción.</strong> Vercel no puede llamar a tu PC. Configurá{" "}
      <code>VITE_API_URL</code> con la URL de Railway y hacé Redeploy. Ver <code>RAILWAY.md</code>.
    </Alert>
  );
}
