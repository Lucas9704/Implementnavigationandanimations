import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import NaturalParksPage from "./pages/NaturalParksPage";
import PublicCommunicationPage from "./pages/PublicCommunicationPage";
import DevlightsCampaignsPage from "./pages/DevlightsCampaignsPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="size-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/natural-parks" element={<NaturalParksPage />} />
          <Route path="/public-communication" element={<PublicCommunicationPage />} />
          <Route path="/devlights-campaigns" element={<DevlightsCampaignsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}