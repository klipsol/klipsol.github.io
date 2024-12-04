"use client";
import CalendlyModal from "@/app/the-bump/Components/Calendly/CalendlyModal";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Navbar({ customBg }) {
  // const router = useRouter();
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const params = useParams();
  const publisher = params?.publisherId?.[0];
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // const handleRoiRedirect = () => {
  //   if (location.pathname !== '/roi-calculator') {
  //     router.push('/roi-calculator');
  //   }
  // };

  return (
    <>
      <div
        className={twMerge(
          "lg:sec-container opacity-1 mt-0 relative z-50 lg:pr-10 mx-0",
          customBg && "bg-primary"
        )}
        id="nav"
      >
        <div className="lg:flex gap-4 relative pl-4 justify-between items-start flex flex-row md:flex-row bg-transparent rounded-3xl md:custom-text-base">
          <Link href={"/publisher/" + localStorage.getItem("publisher")}>
            <img
              src="/dpandaLogo2.png"
              alt="logo"
              className="md:hidden block w-10 absolute top-2"
            />
            <img
              src="/DpandaLogo.png"
              alt="logo"
              className="max-h-10 mt-6 mb-4 hidden md:block"
            />
          </Link>
          <div className="p-2 md:px-8 md:pt-6 md:pb-4 bg-[#043045] rounded-b-2xl lg:block">
            <div className="text-sm md:gap-x-6 text-center gap-y-2 items-center pt-0 w-full md:w-fit justify-between hidden sm:flex sm:flex-row md:flex-row lg:flex">
              {/* <LivePreviewLinks /> */}
              <Link
                href="/roi-calculator"
                // onClick={handleRoiRedirect}
                className="rounded-[24px] bg-secondaryBg px-4 py-1 text-white font-medium"
                // variant="primary"
              >
                ROI <br className="lg:hidden" /> Calculator
              </Link>{" "}
              {pathname !== "/" && (
                <div className="bg-[#004A6C] lg:h-6 h-8 w-0.5"></div>
              )}
              {pathname !== "/" && (
                <button
                  onClick={openModal}
                  className="rounded-[24px] text-white  px-4 py-1  font-medium"
                >
                  Talk
                  <br className="lg:hidden" /> to us
                </button>
              )}
              <div className="bg-[#004A6C] lg:h-6 h-8 w-0.5"></div>
              <Link
                href="/features"
                className="rounded-[24px] text-white px-4 py-1 md:text-white font-medium"
              >
                All <br className="lg:hidden" /> Features
              </Link>
            </div>
          </div>
        </div>
      </div>
      <CalendlyModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
