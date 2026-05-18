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
      className="fixed left-0 top-0 z-50 flex h-[61px] w-full flex-col items-center bg-[rgba(255,255,255,0.9)] px-4 pb-px pt-[16px] backdrop-blur-sm sm:px-6 md:px-12 lg:px-16 xl:px-[48px]"
      data-name="Navbar"
    >
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="relative flex h-[28px] w-full max-w-[1440px] items-center justify-between gap-4">
        <Link to="/" className="relative block min-w-0 shrink">
          <div className="relative size-full border-0 border-[transparent] bg-clip-padding border-solid">
            <p className="font-['Groteska:Medium',sans-serif] truncate text-[16px] leading-[28px] tracking-[-0.45px] text-black not-italic sm:text-[18px]">
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
              className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[rgba(0,0,0,0.1)] bg-white/70 text-black transition-colors hover:bg-white sm:hidden"
              aria-label="Open navigation menu"
              type="button"
            >
              <MenuIcon className="size-4" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="border-l border-[rgba(0,0,0,0.08)] bg-white px-5 pt-14">
            <SheetTitle className="sr-only">Mobile navigation</SheetTitle>
            <div className="flex flex-col gap-3">
              {isHome ? (
                <SheetClose asChild>
                  <button
                    onClick={handleWorkClick}
                    className="rounded-[16px] border border-[rgba(0,0,0,0.08)] px-4 py-3 text-left font-['Montserrat:Regular',sans-serif] text-[15px] text-[rgba(0,0,0,0.85)] transition-colors hover:bg-[rgba(0,0,0,0.03)]"
                    type="button"
                  >
                    Work
                  </button>
                </SheetClose>
              ) : (
                <SheetClose asChild>
                  <Link
                    to="/#selected-work"
                    className="rounded-[16px] border border-[rgba(0,0,0,0.08)] px-4 py-3 font-['Montserrat:Regular',sans-serif] text-[15px] text-[rgba(0,0,0,0.85)] transition-colors hover:bg-[rgba(0,0,0,0.03)]"
                  >
                    Work
                  </Link>
                </SheetClose>
              )}
              {isHome ? (
                <SheetClose asChild>
                  <button
                    onClick={handleResumeClick}
                    className="rounded-[16px] border border-[rgba(0,0,0,0.08)] px-4 py-3 text-left font-['Montserrat:Regular',sans-serif] text-[15px] text-[rgba(0,0,0,0.85)] transition-colors hover:bg-[rgba(0,0,0,0.03)]"
                    type="button"
                  >
                    Resume
                  </button>
                </SheetClose>
              ) : (
                <SheetClose asChild>
                  <Link
                    to="/#resume"
                    className="rounded-[16px] border border-[rgba(0,0,0,0.08)] px-4 py-3 font-['Montserrat:Regular',sans-serif] text-[15px] text-[rgba(0,0,0,0.85)] transition-colors hover:bg-[rgba(0,0,0,0.03)]"
                  >
                    Resume
                  </Link>
                </SheetClose>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.div>
  );
}
