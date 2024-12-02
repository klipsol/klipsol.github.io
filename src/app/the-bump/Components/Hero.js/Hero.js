'use client';
import { useParams } from 'next/navigation';
import DPVideo from '../DPVideo/DPVideo';
import HighlightedText from '../HighlightedText/HighlightedText';
import Navbar from '../Nav/Navbar';

const Hero = () => {
	const params = useParams();
	const publisher = params?.publisherId?.[0];

	return (
		<>
			<section className="hidden md:block h-screen md:relative overflow-hidden bg-white">
				<div className="absolute top-0 h-[50vh] bg-[#F7BA30] w-full"></div>

				<div className="absolute inset-0 mr-[80px] lg:flex justify-between sm:z-20">
					<Navbar />
					<div></div>
					<div className="lg:z-10 sm:z-30 flex flex-col pl-[10%]">
						<div className="flex-1 justify-end flex flex-col">
							<h2 className="text-white">
								<span className="text-white sm:text-[60px] lg:text-[72px] 2xl:text-[4.5em] xxl:text-[4.9em] leading-[1.2]">
									<span className="text-[#023046] font-extrabold">Discovery</span> Meets
									<br /> Commerce
								</span>
							</h2>

							<p className="md:mt-[15px] text-black w-[85%] font-medium lg:text-[26px] sm:text-[18px] custom-text-sm-medium">
								Power of Discovery And Commerce, as championed by Google, Amazon, TikTok and Meta
							</p>
						</div>

						<div className="z-50 sec-container xxl:text-[1.4em] inset-0 md:my-[50px]">
							<a
								href="/theBump"
								className="flex flex-col cursor-pointer bg-[#023046] rounded-[46px] py-2 xxl:py-3 xxl:rounded-[50px] w-[240px] px-10"
							>
								<div className="flex gap-x-2 items-center relative">
									<span className="bg-[#F7BA30] w-2 h-2 xxl:w-2.5 xxl:h-2.5 rounded-full animate-ping [animation-duration:0.9s] absolute top-2 md:top-2 md:-left-4"></span>
									<span className="bg-[#F7BA30] w-2 h-2 xxl:w-2.5 xxl:h-2.5 rounded-full  absolute top-2 md:top-2 md:-left-4"></span>
									<span className="text-white text-center text-[18px] font-normal ml-3 xxl:ml-1 md:m-auto">
										Live Preview
									</span>
								</div>
								<p className="text-[#F7BA30] text-[14px] xxl:text-[0.7em] text-left ml-3 md:m-auto">
									for The Bump
								</p>
							</a>
						</div>
						<div className="inset-0 bg-transparent z-10 sec-container flex flex-1 items-start">
							<div className="relative">
								<div className="text-primaryTextColor bottom-0">
									<p className="font-medium lg:text-[28px]">
										Big Tech Is Transforming Discovery To Commerce
									</p>
									<h1 className="py-4 custom-text-sm-medium md:text-[32px] md:mt-[5%] md:mb-[20px]">
										<HighlightedText text={'Bringing'} /> That Power To You
									</h1>
									<div className="flex gap-x-3 custom-text-xs font-medium">
										<div className="bg-[#FEF4D3] sm:text-center lg:px-5 lg:py-4 rounded-lg relative">
											Technology
											<div className="absolute lg:h-full bg-[#F7BB30] 2xl:py-2 lg:w-1.5 sm:w-full sm:h-1.5 left-0 top-0"></div>
										</div>
										<div className="bg-[#FEF4D3] sm:text-center lg:p-5 rounded-lg relative">
											Operations
											<div className="absolute lg:h-full bg-[#F7BB30] 2xl:py-2 lg:w-1.5 sm:w-full sm:h-1.5 left-0 top-0"></div>
										</div>
										<div className="bg-[#FEF4D3] sm:text-center lg:p-5 rounded-lg relative">
											Brand Supply
											<div className="absolute lg:h-full bg-[#F7BB30] 2xl:py-2 lg:w-1.5 sm:w-full sm:h-1.5 left-0 top-0"></div>
										</div>
										<div className="bg-[#FEF4D3] sm:text-center lg:p-5 rounded-lg relative">
											Intelligence
											<div className="absolute lg:h-full bg-[#F7BB30] 2xl:py-2 lg:w-1.5 sm:w-full sm:h-1.5 left-0 top-0"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="h-[90%] rounded-b-full min-w-[40%] bg-[#003045] sm:hidden lg:block">
						<div className="flex justify-center items-center h-full">
							<DPVideo id="videoDiv" className="h-[60%] w-fit object-cover" src="/thebump-1.mp4" />
						</div>
					</div>
				</div>
				{/* <div className="lg:h-[90%] pb-10 xxl:h-[95%] rounded-b-full bg-red top-[25%] sm:-z-0 lg:w-[45%] bg-[#003045] sm:h-[40%] sm:w-full sec-container relative lg:hidden">
					<div className="flex justify-center items-end  h-full">
						<DPVideo id="videoDiv" className="lg:h-[60%] sm:h-[60%] w-fit" src="/HeroVideo.mp4" />
					</div>
				</div> */}
			</section>
		</>
	);
};

export default Hero;
