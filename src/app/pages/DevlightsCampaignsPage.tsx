import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";
import DevlightsDigitalCampaigns from "../../imports/DevlightsDigitalCampaigns/DevlightsDigitalCampaigns";

export default function DevlightsCampaignsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white relative size-full overflow-y-auto"
    >
      <div className="pt-[60px]">
        <Breadcrumb currentPage="Devlights Digital Campaigns" />
        <DevlightsDigitalCampaigns />
      </div>
      <Navbar />
    </motion.div>
  );
}
