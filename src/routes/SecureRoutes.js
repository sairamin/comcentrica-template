import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import AppSkeleton from "../components/appSkeleton";
import PatientsPage from "../pages/patients";
import TemplatesPage from "../pages/templates";
import DocumentTypesPage from "../pages/documentTypes";

function SecureRoutes() {
  return (
    <AppSkeleton>
      <Routes>
        <Route path="patients" element={<PatientsPage />} />
        <Route path="templates" element={<TemplatesPage />} />
        <Route path="documentTypes" element={<DocumentTypesPage />} />
      </Routes>
    </AppSkeleton>
  );
}

export default SecureRoutes;
