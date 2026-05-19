import { useState } from "react";
import { Link, useLocation } from "react-router";
import { motion } from "motion/react";
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

interface NavbarProps {
  onWorkClick?: () => void;
  onResumeClick?: () => void;
}

export default function Navbar({ onWorkClick, onResumeClick }: NavbarProps) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleWorkClick = (e: React.MouseEvent) => {
    if (isHome && onWorkClick) {
      e.preventDefault();
      onWorkClick();
      setIsMobileMenuOpen(false);
    }
  };

  const handleResumeClick = (e: React.MouseEvent) => {
    if (isHome && onResumeClick) {
      e.preventDefault();
      onResumeClick();
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-0 top-0 z-50 flex h-[60px] sm:h-[61px] w-full flex-col items-center bg-[rgba(255,255,255,0.95)] px-4 pb-px pt-4 sm:pt-[16px] backdrop-blur-md border-b border-[rgba(0,0,0,0.06)] sm:px-6 md:px-12 lg:px-16 xl:px-[48px] safe-area-top"
      data-name="Navbar"
    >
      <div className="relative flex h-[24px] sm:h-[28px] w-full max-w-[1440px] items-center justify-between gap-4">
        <Link to="/" className="relative block min-w-0 shrink">
          <div className="relative size-full border-0 border-[transparent] bg-clip-padding border-solid">
            <p className="font-['Groteska:Medium',sans-serif] truncate text-[15px] sm:text-[16px] leading-[24px] sm:leading-[28px] tracking-[-0.3px] sm:tracking-[-0.45px] text-black not-italic">
              AnaPaulaChurruarin.
            </p>
          </div>
        </Link>
        <div className="hidden shrink-0 items-start gap-6 sm:flex">
          <div className="relative flex size-full cursor-pointer items-start gap-6 border-0 border-[transparent] bg-clip-padding border-solid">
            {isHome ? (
              <button onClick={handleWorkClick} className="relative shrink-0">
                <div className="relative size-full border-0 border-[transparent] bg-clip-padding border-solid">
                  <p className="font-['Montserrat:Regular',sans-serif] text-[14px] font-normal leading-[20px] whitespace-nowrap text-[rgba(0,0,0,0.8)] transition-colors hover:text-black">
                    Work
                  </p>
                </div>
              </button>
            ) : (
              <Link to="/#selected-work" className="relative shrink-0">
                <div className="relative size-full border-0 border-[transparent] bg-clip-padding border-solid">
                  <p className="font-['Montserrat:Regular',sans-serif] text-[14px] font-normal leading-[20px] whitespace-nowrap text-[rgba(0,0,0,0.8)] transition-colors hover:text-black">
                    Work
                  </p>
                </div>
              </Link>
            )}
            {isHome ? (
              <button onClick={handleResumeClick} className="relative min-w-px flex-[1_0_0]">
                <div className="relative size-full border-0 border-[transparent] bg-clip-padding border-solid">
                  <p className="font-['Montserrat:Regular',sans-serif] text-[14px] font-normal leading-[20px] whitespace-nowrap text-[rgba(0,0,0,0.8)] transition-colors hover:text-black">
                    Resume
                  </p>
                </div>
              </button>
            ) : (
              <Link to="/#resume" className="relative min-w-px flex-[1_0_0]">
                <div className="relative size-full border-0 border-[transparent] bg-clip-padding border-solid">
                  <p className="font-['Montserrat:Regular',sans-serif] text-[14px] font-normal leading-[20px] whitespace-nowrap text-[rgba(0,0,0,0.8)] transition-colors hover:text-black">
                    Resume
                  </p>
                </div>
              </Link>
            )}
          </div>
        </div>
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <button
              className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[rgba(0,0,0,0.1)] bg-white/80 text-black transition-all duration-200 hover:bg-white hover:scale-105 active:scale-95 sm:hidden touch-manipulation"
              aria-label="Open navigation menu"
              type="button"
            >
              <MenuIcon className="size-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="border-l border-[rgba(0,0,0,0.08)] bg-white w-[280px] sm:w-[320px] px-5">
            <SheetTitle className="sr-only">Mobile navigation</SheetTitle>
            <div className="flex flex-col gap-3 mt-12">
              {isHome ? (
                <SheetClose asChild>
                  <button
                    onClick={handleWorkClick}
                    className="rounded-[12px] border border-[rgba(0,0,0,0.08)] px-5 py-4 text-left font-['Montserrat:Medium',sans-serif] text-[16px] text-[rgba(0,0,0,0.85)] transition-all duration-200 hover:bg-[rgba(0,0,0,0.04)] hover:border-[rgba(0,0,0,0.15)] active:bg-[rgba(0,0,0,0.08)]"
                    type="button"
                  >
                    Work
                  </button>
                </SheetClose>
              ) : (
                <SheetClose asChild>
                  <Link
                    to="/#selected-work"
                    className="rounded-[12px] border border-[rgba(0,0,0,0.08)] px-5 py-4 font-['Montserrat:Medium',sans-serif] text-[16px] text-[rgba(0,0,0,0.85)] transition-all duration-200 hover:bg-[rgba(0,0,0,0.04)] hover:border-[rgba(0,0,0,0.15)]"
                  >
                    Work
                  </Link>
                </SheetClose>
              )}
              {isHome ? (
                <SheetClose asChild>
                  <button
                    onClick={handleResumeClick}
                    className="rounded-[12px] border border-[rgba(0,0,0,0.08)] px-5 py-4 text-left font-['Montserrat:Medium',sans-serif] text-[16px] text-[rgba(0,0,0,0.85)] transition-all duration-200 hover:bg-[rgba(0,0,0,0.04)] hover:border-[rgba(0,0,0,0.15)] active:bg-[rgba(0,0,0,0.08)]"
                    type="button"
                  >
                    Resume
                  </button>
                </SheetClose>
              ) : (
                <SheetClose asChild>
                  <Link
                    to="/#resume"
                    className="rounded-[12px] border border-[rgba(0,0,0,0.08)] px-5 py-4 font-['Montserrat:Medium',sans-serif] text-[16px] text-[rgba(0,0,0,0.85)] transition-all duration-200 hover:bg-[rgba(0,0,0,0.04)] hover:border-[rgba(0,0,0,0.15)]"
                  >
                    Resume
                  </Link>
                </SheetClose>
              )}
            </div>
            <div className="absolute bottom-8 left-5 right-5">
              <p className="font-['Montserrat:Regular',sans-serif] text-[12px] text-[rgba(0,0,0,0.4)] leading-relaxed">
                Ana Paula Churruarin<br />
                Graphic Designer
              </p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.div>
  );
}
