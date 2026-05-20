import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";
import PublicCommunicationCampaigns from "../../imports/PublicCommunicationCampaigns/PublicCommunicationCampaigns";

export default function PublicCommunicationPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white relative size-full overflow-y-auto"
    >
      <div className="md:pt-[60px] sm:pt-0">
        <Breadcrumb currentPage="Public Communication Campaigns" />
        <PublicCommunicationCampaigns />
      </div>
      <Navbar />
    </motion.div>
  );
}
