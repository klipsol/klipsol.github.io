import React from 'react' 
import Navbar from '../roi-calculator/Components/Navbar'
export default function Page() {
return (
<div>
   <Navbar/>  
  <section className="retail-network flex items-center justify-center bg-gradient-to-r from-white via-[#fefaf4] to-[#fefaf4] px-4 py-4">
  <div className="lg:sec-container grid md:grid-cols-2 gap-8 items-center">
    {/* Left Text Content */}
    <div className="retail-network-inner space-y-6">
      <h1 className="text-[36px] lg:text-[54px] leading-[23px] text-[#003C63] text-4xl lg:text-5xl">
        Transform Your <br />
        <span className="text-[#FFCF3B] font-bold">Retail Network</span> into<br />
        a Sales Engine
      </h1>
      <p className="text-gray-600 text-lg">
        Seamlessly connect in-store and online journeys with Dpanda’s O2O platform—offering instant financing, quick onboarding, and intelligent ecosystem support.
      </p>
      <button className="request-demo rounded-[14px] text-[#003C63] bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded shadow transition-all duration-300">
        Request Demo
      </button>
    </div>
    {/* Right Side Image */}
    <div className="retail-img2 flex justify-center">
      <img
        src="/retail-img2.png"
        alt="Retail Visual"
        className="w-[661px] h-[509px] object-contain"
      />
    </div>
  </div>
</section>

 <section className="nationwide-main bg-yellow-400 py-16 px-4">
  <div className="max-w-[1200px] container mx-auto grid md:grid-cols-2 gap-4 items-center">
    {/* Left Image */}
    <div className="nationwide-img flex justify-center">
      <img
        src="/nationwide.png"
        alt="Nationwide Reach"
        className="w-[364px] h-[521px]" // Fixed height syntax
      />
    </div>
    {/* Right Content */}
    <div className="nationwide-box-inner space-y-6">
      <h2 className="mx-auto px-4 text-[36px] lg:text-[54px] leading-tight" style={{ color: '#003C63' }}>
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
            <h3 className="text-[36px] font-bold leading-[42px] mb-2" style={{ color: '#003C63' }}>
              EV Dealerships:
            </h3>
            <p className="text-gray-700 mt-[10px]">
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

       <ul className="max-w-[1200px] mx-auto px-4 pt-[60px] grid gap-x-[1.5rem] lg:gap-x-[1.875rem] gap-y-[4rem] lg:gap-y-[3rem] grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 list-none">
   {/* Card 1 */}
   <li className="w-full max-w-[100%] mx-auto relative bg-[#FFF4D1] pt-20 pb-6 px-4 rounded-[14px] flex flex-col items-center text-center mb-[40px]">
      <span className="absolute -top-[50px] bg-[#FFCF3B] w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] rounded-full flex items-center justify-center">
         <img src="/nbfc.png" alt="Icon 1" className="w-[90px] h-[90px] object-contain" />
      </span>
      <h3 className="text-[20px] lg:text-[22px] font-bold text-[#003C63] mb-2">Integrated NBFC Underwriting</h3>
      <p className="text-[#003C63] text-[16px]">Quick EMI approval at POS</p>
   </li>

   {/* Card 2 */}
   <li className="w-full max-w-[100%] mx-auto relative bg-[#FFF4D1] pt-20 pb-6 px-4 rounded-[14px] flex flex-col items-center text-center mb-[40px]">
      <span className="absolute -top-[50px] bg-[#FFCF3B] w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] rounded-full flex items-center justify-center">
         <img src="/lighting-box.png" alt="Icon 2" className="w-[90px] h-[90px] object-contain" />
      </span>
      <h3 className="text-[20px] lg:text-[22px] font-bold text-[#003C63] mb-2">Lightning <br />Onboarding</h3>
      <p className="text-[#003C63] text-[16px]">Retailers go live in 48 hours</p>
   </li>

   {/* Card 3 */}
   <li className="w-full max-w-[100%] mx-auto relative bg-[#FFF4D1] pt-20 pb-6 px-4 rounded-[14px] flex flex-col items-center text-center mb-[40px]">
      <span className="absolute -top-[50px] bg-[#FFCF3B] w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] rounded-full flex items-center justify-center">
         <img src="/approvals-rates.png" alt="Icon 3" className="w-[90px] h-[90px] object-contain" />
      </span>
      <h3 className="text-[20px] lg:text-[22px] font-bold text-[#003C63] mb-2">High Approval <br />Rates</h3>
      <p className="text-[#003C63] text-[16px]">Over 85% using AI-based scoring</p>
   </li>

   {/* Card 4 */}
   <li className="w-full max-w-[100%] mx-auto relative bg-[#FFF4D1] pt-20 pb-6 px-4 rounded-[14px] flex flex-col items-center text-center mb-[40px]">
      <span className="absolute -top-[50px] bg-[#FFCF3B] w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] rounded-full flex items-center justify-center">
         <img src="/low-default.png" alt="Icon 4" className="w-[90px] h-[90px] object-contain" />
      </span>
      <h3 className="text-[20px] lg:text-[22px] font-bold text-[#003C63] mb-2">Low Default<br />Rates</h3>
      <p className="text-[#003C63] text-[16px]">Sub-2% with predictive analytics</p>
   </li>
</ul>

      {/* Last Two Cards Centered */}
     
      <div class="max-w-[1200px] nbfs-box-main container mx-auto px-4 py-10">
         <div class="grid grid-cols-1 md:grid-cols-3 gap-[60px]">
            <div class="nbfs-inner-box bg-[#003A70] rounded-2xl p-6 box-inner min-h-[540px] flex flex-col ">
               <div class="flex flex-col md:flex-row md:items-center gap-3 mb-1">
                  <img src="/nbfc1.png" alt="NBFC Icon" class="h-[108px] mx-auto md:mx-0" />
                  <div class="text-center md:text-left">
                     <h2 class="text-3xl font-bold text-yellow-400">NBFCs</h2>
                     <p class="text-[20px] text-white mt-1 leading-[30px] font-normal">
                        Grow Your Loan Book, Lower Your Risk
                     </p>
                  </div>
               </div>
               <ul class="pt-[60px] list-disc pl-5 space-y-2 text-white text-sm nbfs-box">
                  <li>Access 5,000+ retail touch points</li>
                  <li>Plug-and-play APIs for underwriting</li>
                  <li>Co-lending, co-marketing & real-time dashboards</li>
                  <li>85%+ approval, &lt;2% default built-in performance</li>
               </ul>
            </div>
            <div class="nbfs-inner-box bg-[#003A70] rounded-2xl p-6 box-inner min-h-[540px] flex flex-col ">
               <div class="flex flex-col md:flex-row md:items-center gap-3 mb-1">
                  <img src="/retailers-box.png" alt="Retailer Icon" class="h-[108px] mx-auto md:mx-0" />
                  <div class="text-center md:text-left">
                     <h2 class="text-3xl font-bold text-yellow-400">Retailers</h2>
                     <p class="text-[20px] text-white mt-1 leading-[30px] font-normal">
                        Sell More with Seamless Finance at Checkout
                     </p>
                  </div>
               </div>
               <ul class="pt-[60px] list-disc pl-5 space-y-2 text-white text-sm nbfs-box">
                  <li>On-the-spot EMIs—no paperwork</li>
                  <li>48-hour onboarding via mobile portal</li>
                  <li>Unified dashboard to track sales & payouts</li>
                  <li>Full support from credit check to EMI recovery</li>
               </ul>
            </div>
            <div class="nbfs-inner-box bg-[#003A70] rounded-2xl p-6 box-inner min-h-[540px] flex flex-col ">
               <div class="flex flex-col md:flex-row md:items-center gap-3 mb-1">
                  <img src="/oem.png" alt="OEM Icon" class="h-[108px] mx-auto md:mx-0" />
                  <div class="text-center md:text-left">
                     <h2 class="text-3xl font-bold text-yellow-400">Brands & OEMs</h2>
                     <p class="text-[20px] text-white mt-1 leading-[30px] font-normal">
                        Scale Smart with Embedded Financing
                     </p>
                  </div>
               </div>
               <ul class="pt-[60px] list-disc pl-5 space-y-2 text-white text-sm nbfs-box">
                  <li>POS-based EMI conversion</li>
                  <li>Co-branded campaigns with NBFCs</li>
                  <li>Real-time analytics on SKUs, stores, and offers</li>
                  <li>Full compliance with RBI audit-ready systems</li>
               </ul>
            </div>
         </div>
      </div>
   </section>
   <section className="bg-[#FFFAF2] opacity-100 py-20 Steps-section">
      <div className="max-w-7xl mx-auto px-4 text-center">
         {/* Heading */}
         <h2 className="text-[36px] lg:text-[54px] leading-[23px] text-[#003C63] text-3xl md:text-4xl font-bold mb-2">How It Works</h2>
         <p className="text-[#003C63] text-lg mb-12">From Signup to Sale in 3 Simple Steps</p>
         {/* Steps */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 01 */}
            <div className="flex flex-col items-center relative">
               <p className="text-[#003C63] mt-3 font-medium pb-[90px]">Step 01</p>
               <div className="left-box1 relative bg-white rounded-2xl p-6 shadow-md w-full max-w-[280px] pt-[80px] min-h-[350px] flex flex-col justify-between">
                  {/* Yellow Circle with Icon */}
                  <div className="absolute -top-[60px] left-1/2 -translate-x-1/2 bg-[#FFCF3B] w-[200px] h-[200px] rounded-full flex items-center justify-center shadow-md">
                     <img src="/integration_icon_transparent.png" alt="Integration" className="w-[152px] h-[152px]" />
                  </div>
                  <h4 className="text-[32px] text-[#003C63] font-semibold mb-1 pt-[100px] mb-[2px]">Integration</h4>
                  <p className="text-[#003C63] text-sm">NBFCs connect via API,<br />retailers via portal</p>
               </div>
            </div>
            {/* Step 02 */}
            <div className="flex flex-col items-center relative">
               <p className="text-[#003C63] mt-3 font-medium pb-[90px]">Step 03</p>
               <div className="left-box1 relative bg-white rounded-2xl p-6 shadow-md w-full max-w-[280px] pt-[80px] min-h-[350px] flex flex-col justify-between">
                  {/* Yellow Circle with Icon */}
                  <div className="absolute -top-[60px] left-1/2 -translate-x-1/2 bg-[#FFCF3B] w-[200px] h-[200px] rounded-full flex items-center justify-center shadow-md">
                     <img src="/emi-img.png" alt="Real-Time Management" className="w-[152px] h-[152px]" />
                  </div>
                  <h4 className="text-[32px] text-[#003C63] font-semibold mb-2 pt-[100px] mb-[2px] leading-[35px] ">Purchase <br></br>journey</h4>
                  <p className="text-[#003C63] text-sm">
                     (1) In-store/online <br></br>
                     (2) EMI selected <br></br>
                     (3) Instant underwriting
                  </p>
               </div>
            </div>
            {/* Step 03 */}
            <div className="flex flex-col items-center relative">
               <p className="text-[#003C63] mt-3 font-medium pb-[90px]">Step 03</p>
               <div className="relative bg-white rounded-2xl p-6 shadow-md w-full max-w-[280px] pt-[80px] min-h-[350px] flex flex-col justify-between">
                  {/* Yellow Circle with Icon */}
                  <div className="absolute -top-[60px] left-1/2 -translate-x-1/2 bg-[#FFCF3B] w-[200px] h-[200px] rounded-full flex items-center justify-center shadow-md">
                     <img src="/real-time.png" alt="Real-Time Management" className="w-[152px] h-[152px]" />
                  </div>
                  <h4 className="text-[32px] text-[#003C63] font-semibold mb-2 pt-[100px] mb-[2px]  leading-[35px]">Real-Time Management</h4>
                  <p className="text-[#003C63] text-sm">
                     Dashboards, notifications,<br /> Auto-optimisations
                  </p>
               </div>
            </div>
         </div>
      </div>
   </section>
  <section className="bg-[#FFFAF2] opacity-100 py-10 md:py-20 across-the-funnel-main">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-[#003C63] lg:text-[36px] lg:text-[54px] leading-[23px]text-3xl md:text-4xl font-bold mb-[30px] md:mb-[50px] text-center leading-[40px] md:leading-[50px]">
      Proven Gains Across the Funnel
    </h2> 
    {/* Proven Gains Box */}
    <div className="across-the-funnel bg-[#003C63] text-white rounded-lg p-6 flex flex-wrap justify-center md:justify-between gap-4 md:gap-0">
      <div className="flex-1 min-w-[160px] px-4 py-4 text-center">
        <p className="text-[60px] text-[#FFCF3B] font-bold leading-tight">40%</p>
        <p className="text-[24px] leading-[36px]">Increase in<br /> Ticket Size</p>
      </div>

      <div className="flex-1 min-w-[160px] px-4 py-4 border-t md:border-t-0 md:border-l text-center" style={{ borderColor: '#656B6F' }}>
        <p className="text-[60px] text-[#FFCF3B] font-bold leading-tight">85%</p>
        <p className="text-[24px] leading-[36px]">+ EMI Approval Rates</p>
      </div>

      <div className="flex-1 min-w-[160px] px-4 py-4 border-t md:border-t-0 md:border-l text-center" style={{ borderColor: '#656B6F' }}>
        <p className="text-[60px] text-[#FFCF3B] font-bold leading-tight">50%</p>
        <p className="text-[24px] leading-[36px]">Lower Processing Costs</p>
      </div>

      <div className="flex-1 min-w-[160px] px-4 py-4 border-t md:border-t-0 md:border-l text-center" style={{ borderColor: '#656B6F' }}>
        <p className="text-[60px] text-[#FFCF3B] font-bold leading-tight">&lt;2%</p>
        <p className="text-[24px] leading-[36px]">Default<br /> Risk</p>
      </div>

      <div className="flex-1 min-w-[160px] px-4 py-4 border-t md:border-t-0 md:border-l text-center" style={{ borderColor: '#656B6F' }}>
        <p className="text-[60px] text-[#FFCF3B] font-bold leading-tight">5,000+</p>
        <p className="text-[24px] leading-[36px]">integrated POS points</p>
      </div>
    </div>

    {/* CTA with Illustration */}
    <div className="mt-8 md:mt-16 flex flex-col lg:flex-row items-center justify-between gap-8">
      {/* Left Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img src="/request-demo.png" alt="Commerce Illustration" className="max-w-[320px]" />
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="text-[#003C63] text-2xl md:text-3xl font-semibold mb-4">
          Let’s Bring Your Commerce Vision to Life
        </h2>
        <p className="text-[#003C63] text-base mb-6">
          Join India’s most innovative lenders, retailers, & OEMs on the future of O2O.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button className="bg-[#FFCF3B] text-[#003C63] font-semibold px-6 py-2 rounded-md shadow hover:bg-yellow-400 transition">
            Request a Custom Demo
          </button>
          <button className="bg-[#FFCF3B] text-[#003C63] font-semibold px-6 py-2 rounded-md shadow hover:bg-yellow-400 transition">
            Talk to an Expert
          </button>
        </div>
      </div>
    </div>

  </div>
</section>

</div>
)
}