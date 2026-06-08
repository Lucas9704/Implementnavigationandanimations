import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";
import NaturalParksLicensingPlatform from "../../imports/NaturalParksLicensingPlatform/NaturalParksLicensingPlatform";
import NaturalParksLicensingPlatformMobile from "../../imports/NaturalParksLicensingPlatform/NaturalParksLicensingPlatformMobile";

export default function NaturalParksPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white relative size-full overflow-y-auto"
    >
      <div className="xl:hidden pt-[60px]">
        <Breadcrumb currentPage="Natural Parks Licensing Platform" />
        <NaturalParksLicensingPlatformMobile />
      </div>

      <div className="hidden xl:block pt-[60px]">
        <Breadcrumb currentPage="Natural Parks Licensing Platform" />
        <NaturalParksLicensingPlatform />
      </div>
      <Navbar />
    </motion.div>
  );
}
