'use client';
import DPVideo from '../DPVideo/DPVideo';
import HighlightedText from '../HighlightedText/HighlightedText';
import Navbar from '../Nav/Navbar';

export default function Hero() {
	return (
		<>
			<section className="hidden md:block h-screen md:relative overflow-hidden bg-white">
				<Navbar />
				{/* yellow image layout  */}

				<img
					src="/yellow-layout.svg"
					className="absolute top-[-50px] w-full  z-10 lg:block sm:hidden"
					alt="bg"
				/>
				<svg
					className=" sm:top-[-10%] absolute lg:hidden sm:z-10"
					xmlns="http://www.w3.org/2000/svg"
					width="1078.713"
					height="416.878"
					viewBox="0 0 1078.713 416.878"
				>
					<path
						id="Path_36575"
						data-name="Path 36575"
						d="M-49.13,574.735S-29.67,645.921,110.9,646.53s170.4-52.1,372.1-71.795,348.709-16.1,421.44-58.38,125.137-26.21,125.137-26.21V229.657H-49.13Z"
						transform="translate(49.13 -229.657)"
						fill="#f7ba30"
					/>
				</svg>

				<div className="absolute inset-0 md:max-w-[90%] sm:mx-w-[1150px] mr-[25px] ml-auto lg:flex justify-between sm:z-20">
					{/* left section */}
					<div className="lg:z-10 sm:z-30 relative">
						<h2 className="text-white sm:mt-[25%] ">
							<span className="text-white lg:text-[60px] leading-[1.1] pt-3">
								<span className="text-[#023046] font-bold">Discovery</span> Meets
								<br /> Commerce
							</span>
						</h2>

						<p className="text-black mt-5 w-[85%] font-medium custom-text-sm-medium">
							Power of discovery and commerce, as championed by Google, Amazon, TikTok, and Meta
						</p>

						<div className="z-[99999] mt-[9.5%] mb-[60px] w-full sec-container relative xxl:text-[1.4em] inset-0">
							<a
								href="/theBump"
								className="flex relative flex-col cursor-pointer bg-[#023046] rounded-[46px] py-2 xxl:py-3 xxl:rounded-[50px] w-fit px-10  "
							>
								<div className="absolute left-[35px] top-[15px]">
									<span className="bg-[#F7BA30] w-2 h-2 xxl:w-2.5 xxl:h-2.5 rounded-full animate-ping [animation-duration:0.9s] absolute top-2 md:top-2 md:-left-4"></span>
									<span className="bg-[#F7BA30] w-2 h-2 xxl:w-2.5 xxl:h-2.5 rounded-full  absolute top-2 md:top-2 md:-left-4"></span>
								</div>
								<div className="flex gap-x-2 items-center relative">
									{/* <span className="bg-[#F7BA30]/80 w-2 h-2 rounded-full "></span> */}

									<span className="text-white text-[16px] text-center font-normal ml-[3px]">
										Live Preview
									</span>
								</div>
								<p className="text-[#F7BA30] text-[12px] xxl:text-[0.7em] font-medium text-left ml-[3px]">
									for pinterest
								</p>
							</a>
						</div>
						<div>
							<p className="text-primaryTextColor text-[22px] font-medium mb-[30px]">
								Big Tech Is Transforming Discovery To Commerce
							</p>
							<div className="inset-0 bg-transparent w-full z-10 sec-container">
								<div className="text-primaryTextColor">
									<h1 className="py-4 custom-text-sm-medium sm:text-[26px] ">
										<HighlightedText text={'Bringing'} /> that Power to You
									</h1>
									<div className="flex gap-x-3 custom-text-xs ">
										<div className="bg-[#FEF4D3] font-medium sm:text-center sm:py-[12px] sm:px-1 lg:px-5 rounded-lg relative">
											Technology
											<div className="absolute lg:h-full bg-[#F7BB30]  sm:p 2xl:py-2 lg:w-1.5 sm:w-full sm:h-1.5 left-0 top-0"></div>
										</div>
										<div className="bg-[#FEF4D3] font-medium sm:text-center sm:py-[12px] sm:px-1 lg:px-5 rounded-lg relative">
											Operations
											<div className="absolute lg:h-full bg-[#F7BB30]  sm:p 2xl:py-2 lg:w-1.5 sm:w-full sm:h-1.5 left-0 top-0"></div>
										</div>
										<div className="bg-[#FEF4D3] font-medium sm:text-center sm:py-[12px] sm:px-1 lg:px-5 rounded-lg relative">
											Brand Supply
											<div className="absolute lg:h-full bg-[#F7BB30]  sm:p 2xl:py-2 lg:w-1.5 sm:w-full sm:h-1.5 left-0 top-0"></div>
										</div>
										<div className="bg-[#FEF4D3] font-medium sm:text-center sm:py-[12px] sm:px-1 lg:px-5 rounded-lg relative">
											Intelligence
											<div className="absolute lg:h-full bg-[#F7BB30]  sm:p 2xl:py-2 lg:w-1.5 sm:w-full sm:h-1.5 left-0 top-0"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* right section */}
					<div className="lg:h-[85%] xxl:h-[90%] rounded-b-full  lg:w-[66%] bg-[#003045] sm:hidden lg:block">
						<div className="flex justify-center items-center h-full">
							<DPVideo id="videoDiv" className="h-[60%] w-fit object-cover" src="/HeroVideo.mp4" />
						</div>
					</div>
				</div>
				<div className="lg:h-[90%] pb-10 xxl:h-[95%] rounded-b-full bg-red top-[25%] sm:-z-0 lg:w-[45%] bg-[#003045] sm:h-[40%] sm:w-full sec-container relative lg:hidden">
					<div className="flex justify-center items-end  h-full">
						<DPVideo id="videoDiv" className="lg:h-[58%] sm:h-[58%] w-fit " src="/HeroVideo.mp4" />
					</div>
				</div>
			</section>
		</>
	);
}
