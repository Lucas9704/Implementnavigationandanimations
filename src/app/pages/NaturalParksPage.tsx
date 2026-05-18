import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";
import NaturalParksLicensingPlatform from "../../imports/NaturalParksLicensingPlatform/NaturalParksLicensingPlatform";

export default function NaturalParksPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white relative size-full overflow-y-auto"
    >
      <div className="pt-[60px]">
        <Breadcrumb currentPage="Natural Parks Licensing Platform" />
        <NaturalParksLicensingPlatform />
      </div>
      <Navbar />
    </motion.div>
  );
}
