import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <div className="bg-[#013046] h-[116px] w-full text-white">
        <div className="w-full h-full sec-container mx-auto flex justify-between items-center box-border">
          <div className="custom-text-xs h-full justify-center w-fit flex flex-col">
            <img className="h-12 w-fit" src="/panda.png" alt="panda" />
            <p className="mt-2">Democratising Digital Commerce</p>
          </div>
          <div className="grid grid-cols-2 gap-x-10 gap-y-2 text-left text-[0.9em] 2xl:text-[1em]">
            <Link href="" className="hover:underline transition-colors ">
              Privacy Policy
            </Link>
            <Link href="" className="hover:underline transition-colors">
              Shipping Policy
            </Link>
            <Link href="" className="hover:underline transition-colors">
              Refund Policy
            </Link>
            <Link href="" className="hover:underline transition-colors">
              Terms-of Service
            </Link>
            <Link
              href=""
              className="col-span-2 hover:underline transition-colors"
            >
              support@dpanda.ai
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#EEF0F8] w-full flex justify-center py-3 text-[#013046] lg:text-[0.8em]">
        © Klip Solutions Pvt. Ltd., All rights reserved.
      </div>
    </>
  );
}
