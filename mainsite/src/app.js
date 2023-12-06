import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Import your components
import Header from "./components/header";
import UiButtons from "./pages/ui-buttons";
import UICard from "./pages/ui-card";
import Index from "./pages/index";
import IconTabeler from "./pages/icon-tabeler";
import SamplePage from "./pages/sample-page";
import UiAlerts from "./pages/ui-alerts";
import UiForms from "./pages/ui-forms";
import UiTypography from "./pages/ui-typography";

// Uncomment the imports as you add routes for these components
import AuthenticationLogin from "./pages/authentication-login";
import AuthenticationRegister from "./pages/authentication-register";
// ... other imports

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ui-buttons" element={<UiButtons />} />
          <Route path="/ui-card" element={<UICard />} />

          {/* Uncomment and define the route for each component you want to navigate to */}
          <Route path="/login" element={<AuthenticationLogin />} />
          <Route path="/register" element={<AuthenticationRegister />} />
          <Route path="/icon-tabeler" element={<IconTabeler />} />
          <Route path="/sample-page" element={<SamplePage />} />
          <Route path="/ui-alerts" element={<UiAlerts />} />
          <Route path="/ui-forms" element={<UiForms />} />
          <Route path="/ui-typography" element={<UiTypography />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;