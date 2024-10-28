export default function Publisher2() {
  return (
    <main>
      <section className="grid grid-rows-[20px_1fr_20px] p-6 items-center justify-items-center min-h-screen gap-16 bg-[#FFFBEF] font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-col lg:flex-row gap-8 row-start-2 items-center justify-center sm:items-start">
          <p className="text-3xl leading-normal lg:leading-relaxed lg:text-6xl font-medium m-auto">
            Driving higher monetization
            <br />
            <span className="text-2xl px-4 py-2 lg:text-6xl font-extrabold bg-[#F7B801] rounded-3xl">
              Multi-brand checkout
            </span>
            <br />
            within your site
          </p>
          <video
            playsInline
            muted
            autoPlay
            loop
            // src={'/IndiGO-beach-trip_1.mp4'}
            src={'/Top-banner-1.mp4'}
            style={{ width: '600px', height: '600px' }}
          />
          {/* 
          <video width="320" height="240" controls preload="none">
            <source src="./Top-banner-1.mp4" type="video/mp4" />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video> */}
          {/* <img
            // className="w-1/3"
            width={400}
            height={400}
            src="https://miro.medium.com/v2/resize:fit:1400/1*-yduOkneDQ0zCsc2Kz3olw.png"
            alt=""
          /> */}
        </div>
      </section>
      <section className="grid grid-rows-[20px_1fr_20px] p-6 items-center justify-items-center min-h-screen gap-16 bg-[#003C58] font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-col gap-8 row-start-2 items-center justify-center sm:items-start">
          <h1 className="font-medium text-3xl lg:text-6xl m-auto">
            <span className="text-[#F6B802]">$1M+ Worth</span> of Setup Cost
          </h1>
          <div className="flex flex-col lg:flex-row gap-8 row-start-2 items-center justify-center sm:items-start">
            <div className="m-auto">
              <p className="text-[#F6B802] font-extrabold text-8xl">FREE</p>
              <p className="text-3xl lg:text-6xl font-medium text-white">
                We earn after <br /> you do
              </p>
            </div>
            <img
              // className="w-1/3"
              width={400}
              height={400}
              src="https://miro.medium.com/v2/resize:fit:1400/1*-yduOkneDQ0zCsc2Kz3olw.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="grid grid-rows-[20px_1fr_20px] p-6 items-center justify-items-center min-h-screen gap-16 bg-[#FFFBEF] font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-col row-start-2 items-center justify-center sm:items-start">
          <h1 className="font-medium text-3xl lg:text-6xl m-auto">
            Built by <span className="text-[#F6B802]">Experts, </span>
            Trusted by <span className="text-[#F6B802]">Top Brands</span>
          </h1>
          <div className="bg-[#003C58] rounded-t-3xl py-20 w-full p-6 relative mt-20">
            <h2 className="text-[#003C58] text-center text-3xl lg:text-6xl p-5 rounded-full left-1/2 -translate-x-1/2 -top-12 bg-[#F6B802] w-fit absolute">
              About Us
            </h2>
            <div className="flex gap-6 flex-col lg:flex-row justify-between items-center">
              <div className="lg:w-[420px] w-[280px] h-[280px] lg:h-[420px] bg-white rounded-3xl" />
              <div className="lg:w-[420px] w-[280px] h-[280px] lg:h-[420px] bg-white rounded-3xl" />
            </div>
          </div>
          <div className="bg-[#F6B802] -mt-6 rounded-3xl py-20 w-full p-6 relative">
            <h2 className="text-white text-center text-3xl lg:text-6xl p-5 rounded-full left-1/2 -translate-x-1/2 -top-12 bg-[#003C58] w-fit absolute">
              Our Customers
            </h2>
            <div className="flex gap-6 flex-col lg:flex-row justify-between items-center">
              <div className="lg:w-[420px] w-[280px] h-[280px] lg:h-[420px] bg-white rounded-3xl" />
              <div className="lg:w-[420px] w-[280px] h-[280px] lg:h-[420px] bg-white rounded-3xl" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
