import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="footer" className="scrollable-component">
      <div className="bg-[#013046] lg:h-[116px] lg:h-[300px] w-full text-white sm:py-8 sm:px-[15px] lg:p-0">
        <div className="w-full h-full sec-container mx-auto flex justify-between lg:items-center box-border sm:flex-col lg:flex-row">
          <div className="custom-text-xs h-full lg:justify-center w-fit flex flex-col">
            <img className="h-12 w-fit" src="/panda.png" alt="panda" />
            <p className="lg:mt-2 sm:text-2xl sm:mt-3 lg:custom-text-xs">
              Democratising Digital Commerce
            </p>
          </div>
          <div className="custom-text-xs h-full lg:justify-center w-fit flex flex-col">
            <p className='lg:mt-2 sm:text-[0.9rem] sm:mt-3 lg:text-[1rem]'>
              <strong>Office Address:</strong><br/>
              KLIP SOLUTIONS PRIVATE LIMITED (Dpanda),<br/>
              204-205, 2nd Floor, Plot No. 250,<br/>
              Phase IV, Udyog Vihar, Sector-18,<br/>
              Gurugram, Haryana, 122015.
            </p>
          </div>
          <div className="grid grid-cols-[auto_auto] justify-start gap-x-4 lg:gap-y-2 gap-y-2 text-left text-[0.9em] 2xl:text-[1em] mt-5 lg:mt-0">
            <Link
              href="tel:9582215864"
              className="hover:underline transition-colors"
            >
              9582215864
            </Link>
            <Link
              href="mailto:support@dpanda.in"
              className="hover:underline transition-colors"
            >
              support@dpanda.in
            </Link>
            <Link
              href="/policies/privacy-policy"
              className="hover:underline transition-colors "
            >
              Privacy Policy
            </Link>
            {/* <Link href="" className="hover:underline transition-colors">
              Shipping Policy
            </Link> */}
            {/* <Link href="" className="hover:underline transition-colors">
              Refund Policy
            </Link> */}
            <Link
              href="/policies/terms-and-conditions"
              className="hover:underline transition-colors"
            >
              Terms-of-Service
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#EEF0F8] w-full flex justify-center py-3 text-[#013046] text-[0.8em]">
        © Klip Solutions Pvt. Ltd., All rights reserved.
      </div>
    </footer>
  );
}
