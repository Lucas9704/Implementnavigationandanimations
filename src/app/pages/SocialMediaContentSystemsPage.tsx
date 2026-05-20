import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";

import imgFgv1 from "../../imports/0d714a2c3ba3ac324fb1dfd8656bb27526702842.png";
import imgMesaDeTrabajo14 from "../../imports/f2d3909eb7f074bbd15853a2f1a2171a842214bc.png";
import imgPerfilPld1 from "../../imports/b63d59e28b08de9dd608aba4ed02015958139c08.png";
import imgMesaDeTrabajo13 from "../../imports/80c816dcb4b01dc190827ce7febc5bdc53d7bdc9.png";
import imgMesaDeTrabajo22 from "../../imports/ccefb71c13733cb64a1ba7e911c95745f49b26dd.png";
import imgMesaDeTrabajo31 from "../../imports/c3bedf484c8dc6c0f164bc125ed7457cd872a48c.png";
import imgMuv11 from "../../imports/a856f0f051d5820542420d27c724163f3ed702cd.png";
import imgMuv31 from "../../imports/f477355dc388d3c28b905691cb439d2bcdf39e5e.png";
import imgMuv41 from "../../imports/7aaf705ed87f2bc660a7a5e4e0a81ba393de25de.png";
import imgDescuentoSabaDo1 from "../../imports/c5c22d768b6fe9406056661c65ca5f7f38562475.png";
import imgBailalo11 from "../../imports/d5391eade5d06f7393e5e99cb1c48448252046e0.png";
import imgServicios11 from "../../imports/a6e3af24b4bebedfd3eafac0e416bfd1bc8c7d45.png";
import imgBuscamos1 from "../../imports/8a3b411c8a025d9ef8627e195179aaf6769bde0c.png";
import imgMaquillaje31 from "../../imports/51c6bde04da5c89415504b56ccfa7012bde915ba.png";
import imgFrase1 from "../../imports/5ce322d2ed826a0331f9c7c8a28e1478e814ba4c.png";
import imgGcard1 from "../../imports/1917f0c14f9900ff05a796509fba6786be595672.png";
import imgHorarios1 from "../../imports/45ea35858b861a85ed044f928b15baacf5576e96.png";
import imgMesaDeTrabajo52 from "../../imports/e783c61e5785ac03bf6bb96a0cf57b60e7b8d316.png";

export default function SocialMediaContentSystemsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white relative size-full overflow-y-auto"
    >
      <Navbar />
      <div className="pt-[61px]">
        <Breadcrumb currentPage="Social Media Content Systems" showSelectedWork={false} />
        
        <div className="flex flex-col items-center justify-center w-full pb-20">
          <div className="content-stretch flex flex-col items-center justify-center pb-px px-8 md:px-12 xl:px-[72px] relative w-full max-w-[1344px]">
            
            {/* Header Section */}
            <div className="w-full flex flex-col md:flex-row items-center gap-12 py-10 sm:py-16 md:py-24 border-b border-[rgba(0,0,0,0.1)]">
              <div className="flex flex-col gap-[32px] items-start flex-1 min-w-0">
                <div className="rounded-[16777200px] px-[13px] py-[5.5px] border border-[rgba(0,0,0,0.1)]">
                  <p className="font-montserrat text-[12px] md:text-[14px] leading-[20px] text-black">
                    Audience Strategy · Motion Content · Design System
                  </p>
                </div>
                <div className="w-full">
                  <h1 className="font-montserrat text-black leading-tight text-[36px] sm:text-5xl md:text-[clamp(2rem,6vw,6rem)]">
                    Social Media Content Systems
                  </h1>
                </div>
              </div>
              
              {/* Hero Image Group */}
              <div className="relative shrink-0 w-full max-w-[366px] md:max-w-[480px] h-[260px] md:h-[305px] mx-auto md:mx-0 xl:mr-10">
                 <div className="absolute top-0 right-0 w-[248px] h-[140px] md:w-[325px] md:h-[183px] rounded-[10px] md:rounded-[20px] shadow-sm">
                   <img src={imgFgv1} alt="Mockup 1" className="size-full rounded-[10px] md:rounded-[20px] object-cover" />
                 </div>
                 <div className="absolute top-[93px] md:top-[121px] left-0 w-[248px] h-[139px] md:w-[325px] md:h-[183px] rounded-[10px] md:rounded-[20px] shadow-sm">
                   <img src={imgMesaDeTrabajo14} alt="Mockup 2" className="size-full rounded-[10px] md:rounded-[20px] object-cover" />
                 </div>
                 <div className="absolute top-[152px] md:top-[192px] left-[267px] md:left-[337px] w-[77px] h-[76px] md:w-[101px] md:h-[101px] rounded-[10px] md:rounded-[20px] shadow-md z-10">
                   <img src={imgPerfilPld1} alt="Profile" className="size-full rounded-[10px] md:rounded-[20px] object-cover" />
                 </div>
              </div>
            </div>

            {/* Project Overview */}
            <div className="w-full flex flex-col md:flex-row items-start gap-8 md:gap-0 py-12 md:py-16 border-b border-[rgba(0,0,0,0.1)]">
              <div className="w-full md:w-1/3 pr-0 md:pr-[33px] md:border-r border-[rgba(0,0,0,0.1)]">
                <h2 className="font-montserrat text-[24px] leading-[32px] text-black">
                  Project Overview
                </h2>
              </div>
              <div className="w-full md:w-2/3 pl-0 md:pl-[32px] font-montserrat text-[20px] leading-[32.5px] text-[rgba(10,10,10,0.8)]">
                <p>
                  At Houston Creative Studio, I collaborated in the development of monthly social media communication strategies focused on strengthening brand presence, improving audience engagement, and consolidating client positioning. My role involved designing visual content for feed and Instagram Story formats, creating adaptable and cohesive assets aligned with each brand’s identity and target audience within dynamic social media environments.
                </p>
              </div>
            </div>

            {/* PLD Academy */}
            <div className="w-full py-12 md:py-24 flex flex-col gap-[44px]">
              <div className="text-left flex flex-col gap-[16px] items-start w-full">
                <h3 className="font-montserrat-semibold font-semibold text-[32px] sm:text-[44px] text-black">
                  PLD Academy
                </h3>
                <p className="font-montserrat text-[20px] leading-[32.5px] text-[#0a0a0a] w-full">
                  PLD Academy communicates energy, movement, and expressive identity of an urban dance community through bold visuals, high-contrast photography, and dynamic compositions. The content strategy focused on promoting classes, events, and workshops while building a recognizable and engaging digital presence aligned with the academy’s youthful and performance-driven spirit.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-1 md:gap-[10px] w-full">
                <div className="aspect-square bg-gray-200 shadow-sm"><img src={imgMesaDeTrabajo13} className="size-full object-cover" /></div>
                <div className="aspect-square bg-gray-300 shadow-sm"><img src={imgMesaDeTrabajo22} className="size-full object-cover" /></div>
                <div className="aspect-square bg-gray-400 shadow-sm"><img src={imgMesaDeTrabajo31} className="size-full object-cover" /></div>
              </div>
              <div className="grid grid-cols-3 gap-1 md:gap-[10px] w-full">
                <div className="aspect-square bg-gray-200 shadow-sm"><img src={imgMuv11} className="size-full object-cover" /></div>
                <div className="aspect-square bg-gray-300 shadow-sm"><img src={imgMuv31} className="size-full object-cover" /></div>
                <div className="aspect-square bg-gray-400 shadow-sm"><img src={imgMuv41} className="size-full object-cover" /></div>
              </div>
              <div className="grid grid-cols-3 gap-1 md:gap-[10px] w-full">
                <div className="aspect-[1080/1920] bg-gray-200 shadow-sm"><img src={imgDescuentoSabaDo1} className="size-full object-cover" /></div>
                <div className="aspect-[1080/1920] bg-[#111] shadow-sm"></div>
                <div className="aspect-[1080/1920] bg-gray-400 shadow-sm"><img src={imgBailalo11} className="size-full object-cover" /></div>
              </div>
            </div>

            {/* Maria Aidee Beauty Salon */}
            <div className="w-full py-12 md:py-24 flex flex-col gap-[44px]">
              <div className="text-left flex flex-col gap-[16px] items-start w-full">
                <h3 className="font-montserrat-semibold font-semibold text-[32px] sm:text-[44px] text-black">
                  Maria Aidee Beauty Salon
                </h3>
                <p className="font-montserrat text-[16px] md:text-[20px] leading-[24px] md:leading-[32.5px] text-[#0a0a0a] w-full">
                  Maria Aidee Beauty Salon’s social media communication was designed to reflect a warm, feminine, and approachable brand identity through soft color palettes, lifestyle-oriented photography, and elegant visual compositions. We focused on promoting beauty and self-care services — including makeup, hairstyling, and manicure treatments — while building an inviting digital presence that emphasized confidence, personal care, and client experience.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-1 md:gap-[10px] w-full">
                <div className="aspect-[1080/1920] bg-gray-200 shadow-sm"><img src={imgServicios11} className="size-full object-cover" /></div>
                <div className="aspect-[1080/1920] bg-gray-300 shadow-sm"><img src={imgBuscamos1} className="size-full object-cover" /></div>
                <div className="aspect-[1080/1920] bg-gray-400 shadow-sm"><img src={imgMaquillaje31} className="size-full object-cover" /></div>
              </div>
              <div className="grid grid-cols-3 gap-1 md:gap-[10px] w-full">
                <div className="aspect-square bg-gray-200 shadow-sm"><img src={imgFrase1} className="size-full object-cover" /></div>
                <div className="aspect-square bg-gray-300 shadow-sm"><img src={imgGcard1} className="size-full object-cover" /></div>
                <div className="aspect-square bg-gray-400 shadow-sm"><img src={imgHorarios1} className="size-full object-cover" /></div>
              </div>
            </div>

            {/* CUIDARTE */}
            <div className="w-full py-12 md:py-24 flex flex-col gap-[44px]">
              <div className="text-left flex flex-col gap-[16px] items-start w-full">
                <h3 className="font-montserrat-semibold font-semibold text-[32px] sm:text-[44px] text-black">
                  CUIDARTE
                </h3>
                <p className="font-montserrat text-[20px] leading-[32.5px] text-[#0a0a0a] w-full">
                  The digital communication for CUIDARTE was developed to convey a sense of professionalism, trust, and human-centered care through clear visual systems and approachable social media content. We emphasized on rehabilitation and therapeutic services, the communication strategy combined informative messaging, and emotionally conscious visuals to strengthen the institution’s digital presence and connect with patients and families in a supportive and empathetic way.
                </p>
              </div>
              
              <div className="w-full aspect-[1080/1074] bg-gray-200 shadow-md">
                 <img src={imgMesaDeTrabajo52} className="size-full object-cover" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </motion.div>
  );
}
