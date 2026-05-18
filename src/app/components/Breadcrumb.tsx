import { Link } from "react-router";
import { motion } from "motion/react";

interface BreadcrumbProps {
  currentPage: string;
}

export default function Breadcrumb({ currentPage }: BreadcrumbProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="h-[53px] relative shrink-0 w-full flex items-center justify-center"
      data-name="Breadcrumb"
    >
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[16px] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-[48px] relative size-full max-w-[1440px]">
        <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full">
          <Link
            to="/"
            className="h-[20px] relative shrink-0 transition-opacity hover:opacity-70"
          >
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] text-[14px] text-[rgba(0,0,0,0.5)] tracking-[1.4px] uppercase whitespace-nowrap">
                Home
              </p>
            </div>
          </Link>
          <div className="h-[20px] relative shrink-0 w-[6.086px]">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] text-[14px] text-[rgba(0,0,0,0.5)] tracking-[1.4px] uppercase whitespace-nowrap">
                /
              </p>
            </div>
          </div>
          <Link
            to="/#selected-work"
            className="h-[20px] relative shrink-0 transition-opacity hover:opacity-70"
          >
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] text-[14px] text-[rgba(0,0,0,0.5)] tracking-[1.4px] uppercase whitespace-nowrap">
                Selected Work
              </p>
            </div>
          </Link>
          <div className="h-[20px] relative shrink-0 w-[6.086px]">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] text-[14px] text-[rgba(0,0,0,0.5)] tracking-[1.4px] uppercase whitespace-nowrap">
                /
              </p>
            </div>
          </div>
          <div className="h-[20px] relative shrink-0">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] text-[14px] text-black tracking-[1.4px] uppercase whitespace-nowrap">
                {currentPage}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
