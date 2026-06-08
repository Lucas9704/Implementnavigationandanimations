import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";
import PublicCommunicationCampaigns from "../../imports/PublicCommunicationCampaigns/PublicCommunicationCampaigns";
import PublicCommunicationCampaignsMobile from "../../imports/PublicCommunicationCampaigns/PublicCommunicationCampaignsMobile";

export default function PublicCommunicationPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white relative size-full overflow-y-auto"
    >
      {/* Mobile layout — shown below xl breakpoint */}
      <div className="xl:hidden pt-[60px]">
        <Breadcrumb currentPage="Public Communication Campaigns" />
        <PublicCommunicationCampaignsMobile />
      </div>

      {/* Desktop layout — shown at xl and above */}
      <div className="hidden xl:block pt-[60px]">
        <Breadcrumb currentPage="Public Communication Campaigns" />
        <PublicCommunicationCampaigns />
      </div>

      <Navbar />
    </motion.div>
  );
}
