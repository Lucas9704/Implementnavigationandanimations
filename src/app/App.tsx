import { BrowserRouter, Routes, Route } from "react-router";
import HomeV2Page from "./pages/HomeV2Page";
import NaturalParksPage from "./pages/NaturalParksPage";
import PublicCommunicationPage from "./pages/PublicCommunicationPage";
import DevlightsCampaignsPage from "./pages/DevlightsCampaignsPage";
import SocialMediaContentSystemsPage from "./pages/SocialMediaContentSystemsPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="size-full">
        <Routes>
          <Route path="/" element={<HomeV2Page />} />
          <Route path="/natural-parks" element={<NaturalParksPage />} />
          <Route
            path="/public-communication"
            element={<PublicCommunicationPage />}
          />
          <Route
            path="/devlights-campaigns"
            element={<DevlightsCampaignsPage />}
          />
          <Route
            path="/social-media-content-systems"
            element={<SocialMediaContentSystemsPage />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
