import { Link, useLocation } from "react-router";
import { motion } from "motion/react";

interface NavbarProps {
  onWorkClick?: () => void;
  onResumeClick?: () => void;
  homePath?: string;
}

export default function Navbar({
  onWorkClick,
  onResumeClick,
  homePath = "/",
}: NavbarProps) {
  const location = useLocation();
  const isHome = location.pathname === homePath;

  const handleWorkClick = (e: React.MouseEvent) => {
    if (isHome && onWorkClick) {
      e.preventDefault();
      onWorkClick();
    }
  };

  const handleResumeClick = (e: React.MouseEvent) => {
    if (isHome && onResumeClick) {
      e.preventDefault();
      onResumeClick();
    }
  };

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col h-[61px] items-center left-0 pb-px pt-[16px] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-[48px] top-0 w-full z-50 backdrop-blur-sm"
      data-name="Navbar"
    >
      <div
        aria-hidden="true"
        className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full max-w-[1440px]">
        <Link to={homePath} className="h-[28px] relative shrink-0 w-[71.953px]">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <p className="absolute font-montserrat-bold font-bold leading-[28px] left-0 not-italic text-[14px] text-black top-[2.5px] tracking-[-0.45px] whitespace-nowrap">
              AnaPaulaChurruarin.
            </p>
          </div>
        </Link>
        <div className="h-[20px] relative shrink-0 w-[179.617px]">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch cursor-pointer flex gap-[24px] items-start relative size-full">
            {isHome ? (
              <button
                onClick={handleWorkClick}
                className="h-[20px] relative shrink-0 w-[37.445px]"
              >
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="absolute font-montserrat font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.8)] text-left top-[0.5px] whitespace-nowrap transition-colors hover:text-black">
                    Work
                  </p>
                </div>
              </button>
            ) : (
              <Link
                to={`${homePath}#selected-work`}
                className="h-[20px] relative shrink-0 w-[37.445px]"
              >
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="absolute font-montserrat font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.8)] text-left top-[0.5px] whitespace-nowrap transition-colors hover:text-black">
                    Work
                  </p>
                </div>
              </Link>
            )}
            {isHome ? (
              <button
                onClick={handleResumeClick}
                className="flex-[1_0_0] h-[20px] min-w-px relative"
              >
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="absolute font-montserrat font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.8)] text-left top-[0.5px] whitespace-nowrap transition-colors hover:text-black">
                    Resume
                  </p>
                </div>
              </button>
            ) : (
              <Link
                to={`${homePath}#resume`}
                className="flex-[1_0_0] h-[20px] min-w-px relative"
              >
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="absolute font-montserrat font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.8)] text-left top-[0.5px] whitespace-nowrap transition-colors hover:text-black">
                    Resume
                  </p>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
