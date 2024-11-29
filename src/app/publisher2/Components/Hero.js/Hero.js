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
				<Navbar />

				<img
					src="/yellow-layout.svg"
					className="absolute top-[-50px] w-full  z-10 lg:block sm:hidden"
					alt="bg"
				/>
				<svg
					className="sm:top-[-10%] absolute lg:hidden sm:z-10"
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
				<div className="top-[61%] h-fit xxl:top-[64%] 2xl:top-[54%] z-50 w-full sec-container absolute xxl:text-[1.4em] inset-0">
					<a
						href="/theBump"
						className="flex flex-col cursor-pointer bg-[#023046] rounded-[46px] py-2 xxl:py-3 xxl:rounded-[50px] w-fit px-10"
					>
						<div className="flex gap-x-2 items-center relative">
							<span className="bg-[#F7BA30] w-2 h-2 xxl:w-2.5 xxl:h-2.5 rounded-full animate-ping [animation-duration:0.9s] absolute top-2 md:top-2 md:-left-4"></span>
							<span className="bg-[#F7BA30] w-2 h-2 xxl:w-2.5 xxl:h-2.5 rounded-full  absolute top-2 md:top-2 md:-left-4"></span>
							<span className="text-white text-center font-medium ml-3 xxl:ml-1 md:m-auto">
								Live Preview
							</span>
						</div>
						<p className="text-[#F7BA30] text-[10px] xxl:text-[0.7em] text-center ml-3 md:m-auto">
							{publisher && `for ${publisher}`}
						</p>
					</a>
				</div>
				<div className="absolute inset-0 bg-transparent h-full w-full z-10 sec-container">
					<div className="lg:h-[95%] sm:h-full 2xl:h-[95%] w-1/2 sm:w-full relative">
						<div className="text-primaryTextColor absolute bottom-0">
							<p className="font-medium lg:text-xl 2xl:text-3xl xxl:text-4xl">
								Big Tech Is Transforming Discovery To Commerce
							</p>
							<h1 className="py-4 custom-text-sm-medium xxl:text-3xl sm:text-xl">
								<HighlightedText text={'Bringing'} /> That Power To You
							</h1>
							<div className="flex gap-x-3 custom-text-xs font-medium">
								<div className="bg-[#FEF4D3] sm:text-center sm:py-2 sm:px-1 lg:p-5 lg:py-2.5 rounded-lg 2xl:py-2 relative">
									Technology
									<div className="absolute lg:h-full bg-[#F7BB30] sm:p 2xl:py-2 lg:w-1.5 sm:w-full sm:h-1.5 left-0 top-0"></div>
								</div>
								<div className="bg-[#FEF4D3] sm:text-center sm:py-2 sm:px-1 lg:p-5 lg:py-2.5 rounded-lg 2xl:py-2 relative">
									Operations
									<div className="absolute lg:h-full bg-[#F7BB30] sm:p 2xl:py-2 lg:w-1.5 sm:w-full sm:h-1.5 left-0 top-0"></div>
								</div>
								<div className="bg-[#FEF4D3] sm:text-center sm:py-2 sm:px-1 lg:p-5 lg:py-2.5 rounded-lg 2xl:py-2 relative">
									Brand Supply
									<div className="absolute lg:h-full bg-[#F7BB30] sm:p 2xl:py-2 lg:w-1.5 sm:w-full sm:h-1.5 left-0 top-0"></div>
								</div>
								<div className="bg-[#FEF4D3] sm:text-center sm:py-2 sm:px-1 lg:p-5 lg:py-2.5 rounded-lg 2xl:py-2 relative">
									Intelligence
									<div className="absolute lg:h-full bg-[#F7BB30] sm:p 2xl:py-2 lg:w-1.5 sm:w-full sm:h-1.5 left-0 top-0"></div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="absolute inset-0 sec-container lg:flex justify-between sm:z-20">
					<div className="lg:z-10 sm:z-30">
						<h2 className="text-white lg:mt-[20%] 2xl:mt-[15%] sm:mt-[85px]">
							<span className="text-white lg:text-[3.4em] 2xl:text-[4.5em] xxl:text-[4.9em] leading-[1.2] pt-3">
								<span className="text-[#023046] font-extrabold">Discovery</span> Meets
								<br /> Commerce
							</span>
						</h2>

						<p className="text-black mt-5 w-[85%] font-medium custom-text-sm-medium">
							Power of Discovery And Commerce, as Championed by Google, Amazon, TikTok and Meta
						</p>
					</div>

					<div className="h-[90%] rounded-b-full  w-[45vw] bg-[#003045] sm:hidden lg:block">
						<div className="flex justify-center items-center h-full">
							<DPVideo id="videoDiv" className="h-[60%] w-fit object-cover" src="/HeroVideo.mp4" />
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
