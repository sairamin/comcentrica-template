import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import LoginPage from "../pages/login";

import SecureRoutes from "./SecureRoutes";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="*" element={<SecureRoutes />} />
    </Routes>
  );
}

export default AppRoutes;
