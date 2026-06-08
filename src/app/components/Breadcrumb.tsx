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
      className="relative flex min-h-[48px] sm:min-h-[53px] w-full items-center justify-center"
      data-name="Breadcrumb"
    >
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="relative flex size-full max-w-[1440px] flex-col items-start px-4 pb-px pt-4 sm:pt-[16px] sm:px-6 md:px-12 lg:px-16 xl:px-[48px]">
        <div className="relative flex w-full min-w-0 flex-wrap items-center gap-x-[6px] sm:gap-x-[8px] gap-y-1 pb-2 sm:pb-0">
          <Link
            to="/"
            className="relative shrink-0 transition-opacity hover:opacity-70"
          >
            <div className="relative size-full border-0 border-[transparent] bg-clip-padding border-solid">
              <p className="font-montserrat text-[12px] font-normal uppercase tracking-[1.2px] text-[rgba(0,0,0,0.5)] sm:text-[14px] sm:tracking-[1.4px]">
                Home
              </p>
            </div>
          </Link>
          <div className="relative shrink-0">
            <div className="relative size-full border-0 border-[transparent] bg-clip-padding border-solid">
              <p className="font-montserrat text-[12px] font-normal uppercase tracking-[1.2px] text-[rgba(0,0,0,0.5)] sm:text-[14px] sm:tracking-[1.4px]">
                /
              </p>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <div className="relative size-full border-0 border-[transparent] bg-clip-padding border-solid">
              <p className="font-montserrat line-clamp-2 text-[12px] font-normal uppercase tracking-[1.2px] text-black sm:text-[14px] sm:tracking-[1.4px]">
                {currentPage}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
