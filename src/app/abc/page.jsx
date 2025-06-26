import React from 'react' 
export default function Page() {
return (
<div>
   <section className="flex   justify-center min-h-screen bg-gradient-to-r from-white via-[#fefaf4] to-[#fefaf4] px-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 ">
         {/* Left Content */}
         <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-tight">
               Transform Your <span className="text-yellow-500">Retail Network</span> into a Sales Engine
            </h1>
            <p className="text-gray-600">
               Seamlessly connect in-store and online journeys with Dpanda's O2O platform—offering instant financing, quick onboarding, and intelligent ecosystem support.
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded shadow">
            Request Demo
            </button>
         </div>
         {/* Right Image */}
         <div className="flex justify-center">
            <img
               src="/retail-img2.png"
               alt="retail"
               className="w-[661px] h-909px"
               />
         </div>
      </div>
   </section>
   <section className="bg-yellow-400 py-16 px-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
         {/* Left Image */}
         <div className="flex justify-center">
            <img
               src="/nationwide.png" // Replace with your correct image path
               alt="Nationwide Reach"
               className="w-[346px] h-521px"
               />
         </div>
         {/* Right Content */}
         <div className="space-y-6">
            <h2 className="text-[56px] leading-tight" style={{ color: '#003C63' }}>
            <span className="font-bold">Nationwide Reach,</span><br />
            <span className="font-normal">Local Impact</span>
            </h2>
            <div className="max-w-[1024px] mx-auto px-4">
               <div className="grid sm:grid-cols-2 gap-4 justify-center">
                  {/* Card 1 */}
                  <div className="bg-[#FFFAF2] p-6 rounded-[14px]">
                     <h3 className="text-[36px] font-bold leading-[42px] mb-2" style={{ color: '#003C63' }}>
                     Consumer Durables:
                     </h3>
                     <p className="text-gray-700">
                        <span className="text-[21px] font-bold" style={{ color: '#003C63' }}>4,000+ stores </span>
                        and growing across metros and Tier 2-3 towns ready to showcase and sell your products.
                     </p>
                  </div>
                  {/* Card 2 */}
                  <div className="bg-[#FFFAF2] p-6 rounded-[14px]">
                     <h3 className="text-[36px] font-bold leading-[42px] mb-2" style={{ color: '#003C63' }}>EV Dealerships:</h3>
                     <p className="text-gray-700 mt-[50px]">
                        <span className="font-bold" style={{ color: '#003C63' }}>900+ 2-wheeler </span>
                        dealerships equipped for in-store discovery and digital checkout.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section className="bg-[#FFFAF2] py-16 scale-box-main">
      {/* Heading Section */}
      <div className="text-center mb-12 px-4">
         <h2 className="text-[36px] lg:text-[54px] leading-[23px] font-bold text-[#003C63] mb-4"> Built for Scale.</h2>
         <p className="text-[20px] lg:text-[44px] font-medium text-[#003C63]">Optimized for Conversion.</p>
      </div>
      {/* Cards */}
      <ul className="max-w-[1200px] mx-auto px-4 pt-[60px] grid gap-x-[1.5rem] lg:gap-x-[1.875rem] gap-y-[4rem] lg:gap-y-[3rem] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 list-none">
         {/* Card 1 */}
         <li className="w-full max-w-[320px] mx-auto relative bg-[#FFF4D1] pt-20 pb-6 px-4 rounded-[14px] flex flex-col items-center text-center mb-[40px]">
            <span className="absolute -top-[50px] bg-[#FFCF3B] w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] rounded-full flex items-center justify-center">
            <img src="/nbfc.png" alt="Icon 1" className="w-[60px] h-[60px] object-contain" />
            </span>
            <h3 className="text-[20px] lg:text-[22px] font-bold text-[#003C63] mb-2">Integrated NBFC Underwriting</h3>
            <p className="text-[#003C63] text-[16px]">Quick EMI approval at POS</p>
         </li>
         {/* Card 2 */}
         <li className="w-full max-w-[320px] mx-auto relative bg-[#FFF4D1] pt-20 pb-6 px-4 rounded-[14px] flex flex-col items-center text-center mb-[40px]">
            <span className="absolute -top-[50px] bg-[#FFCF3B] w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] rounded-full flex items-center justify-center">
            <img src="/nbfc.png" alt="Icon 2" className="w-[60px] h-[60px] object-contain" />
            </span>
            <h3 className="text-[20px] lg:text-[22px] font-bold text-[#003C63] mb-2">Lightning <br></br>Onboarding</h3>
            <p className="text-[#003C63] text-[16px]">Retailers go live in 48 hours</p>
         </li>
         {/* Card 3 */}
         <li className="w-full max-w-[320px] mx-auto relative bg-[#FFF4D1] pt-20 pb-6 px-4 rounded-[14px] flex flex-col items-center text-center mb-[40px]">
            <span className="absolute -top-[50px] bg-[#FFCF3B] w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] rounded-full flex items-center justify-center">
            <img src="/nbfc.png" alt="Icon 3" className="w-[60px] h-[60px] object-contain" />
            </span>
            <h3 className="text-[20px] lg:text-[22px] font-bold text-[#003C63] mb-2">Unified<br></br> Communication</h3>
            <p className="text-[#003C63] text-[16px]">Real-time alerts for all parties</p>
         </li>
      </ul>
      {/* Last Two Cards Centered */}
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col sm:flex-row justify-center gap-[1.5rem] lg:gap-[1.875rem] mt-[2rem]">
         {/* Card 4 */}
         <li className="w-full max-w-[320px] list-none relative bg-[#FFF4D1] pt-20 pb-6 px-4 rounded-[14px] flex flex-col items-center text-center mb-[40px]">
            <span className="absolute -top-[50px] bg-[#FFCF3B] w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] rounded-full flex items-center justify-center">
            <img src="/nbfc.png" alt="Icon 4" className="w-[60px] h-[60px] object-contain" />
            </span>
            <h3 className="text-[20px] lg:text-[22px] font-bold text-[#003C63] mb-2">High Approval <br></br>Rates</h3>
            <p className="text-[#003C63] text-[16px]">Over 85% using AI-based scoring</p>
         </li>
         {/* Card 5 */}
         <li className="w-full max-w-[320px] list-none relative bg-[#FFF4D1] pt-20 pb-6 px-4 rounded-[14px] flex flex-col items-center text-center mb-[40px]">
            <span className="absolute -top-[50px] bg-[#FFCF3B] w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] rounded-full flex items-center justify-center">
            <img src="/nbfc.png" alt="Icon 5" className="w-[60px] h-[60px] object-contain" />
            </span>
            <h3 className="text-[20px] lg:text-[22px] font-bold text-[#003C63] mb-2">Low Default<br></br> Rates</h3>
            <p className="text-[#003C63] text-[16px]">Sub-2% with predictive analytics</p>
         </li>
      </div>
      
<div class="container mx-auto px-4 py-10">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-[60px]">

    
    <div class="bg-[#003A70] rounded-2xl p-6 box-inner ">
      <div class="flex items-center gap-3 mb-1">
        <img src="/nbfc1.png" alt="NBFC Icon" class="h-[108px]" />
        <div>
          <h2 class="text-2xl font-bold text-yellow-400">NBFCs</h2>
      <p class="text-[20px] text-white mt-1 leading-[30px] font-normal">
            Grow Your Loan Book, Lower Your Risk
          </p>
        </div>
      </div>
      <ul class=" pt-[73px] list-disc pl-5 space-y-2 text-white text-sm nbfs-box">
        <li>Access 5,000+ retail touch points</li>
        <li>Plug-and-play APIs for underwriting</li>
        <li>Co-lending, co-marketing & real-time dashboards</li>
        <li>85%+ approval, &lt;2% default built-in performance</li>
      </ul>
    </div>

    
    <div class="bg-[#003A70] rounded-2xl p-6 box-inner ">
      <div class="flex items-center gap-3 mb-1">
        <img src="/nbfc1.png" alt="Retailer Icon" class="h-[108px]" />
        <div>
          <h2 class="text-2xl font-bold text-yellow-400">Retailers</h2>
      <p class="text-[20px] text-white mt-1 leading-[30px] font-normal">
            Sell More with Seamless Finance at Checkout
          </p>
        </div> 
      </div>
      <ul class=" pt-[83px] list-disc pl-5 space-y-2 text-white text-sm nbfs-box">
        <li>On-the-spot EMIs—no paperwork</li>
        <li>48-hour onboarding via mobile portal</li>
        <li>Unified dashboard to track sales & payouts</li>
        <li>Full support from credit check to EMI recovery</li>
      </ul>
    </div>

 
    <div class="bg-[#003A70] rounded-2xl p-6 box-inner ">
      <div class="flex items-center gap-3 mb-1">
        <img src="/nbfc1.png" alt="OEM Icon" class="h-[108px]" />
        <div>
          <h2 class="text-2xl font-bold text-yellow-400">Brands & OEMs</h2>
      <p class="text-[20px] text-white mt-1 leading-[30px] font-normal">
            Scale Smart with Embedded Financing
          </p>
        </div>
      </div>
      <ul class="pt-[83px] list-disc pl-5 space-y-2 text-white text-sm nbfs-box">
        <li>POS-based EMI conversion</li>
        <li>Co-branded campaigns with NBFCs</li>
        <li>Real-time analytics on SKUs, stores, and offers</li>
        <li>Full compliance with RBI audit-ready systems</li>
      </ul>
    </div>

  </div>
</div>



   </section>
</div>
)
}