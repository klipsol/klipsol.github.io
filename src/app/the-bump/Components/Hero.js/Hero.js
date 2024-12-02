'use client';
import { useEffect, useState } from 'react';
import DPVideo from '../DPVideo/DPVideo';
import HighlightedText from '../HighlightedText/HighlightedText';
import Navbar from '../Nav/Navbar';

const Hero = () => {
	const [pubName, setPubName] = useState('');

	useEffect(() => {
		if (location.pathname.includes('/publisher/')) {
			setPubName(location.pathname.replace('/publisher/', '').replace('-', ' '));
		}
	}, []);

	return (
		<>
			<section className="hidden md:block h-screen md:relative overflow-hidden bg-white">
				<div className="absolute top-0 h-[50vh] bg-primary w-full"></div>

				<div className="absolute inset-0 mr-[80px] lg:flex justify-between sm:z-20">
					<Navbar publisher={pubName} />
					<div></div>
					<div className="lg:z-10 sm:z-30 flex flex-col pl-[10%]">
						<div className="flex-1 justify-end flex flex-col">
							<h2 className="text-white">
								<span className="text-white sm:text-[60px] 2xl:text-[72px] xxl:text-[4.9em] leading-[1.2]">
									<span className="text-secondary font-extrabold">Discovery</span> Meets
									<br /> Commerce
								</span>
							</h2>

							<p className="md:mt-[15px] text-secondary w-[85%] font-medium 2xl:text-[24px] sm:text-[18px] custom-text-sm-medium">
								<span className="font-bold">
									From a <span className="line-through text-[16px]">medium</span> to Destination for
									Discovery
								</span>
								, as mastered by Google, Amazon, TikTok and Meta
							</p>
						</div>

						<div className="z-50 sec-container xxl:text-[1.4em] inset-0 md:my-[50px]">
							<a
								href="/theBump"
								className="flex flex-col cursor-pointer bg-secondary rounded-[46px] py-2 xxl:py-3 xxl:rounded-[50px] w-[240px] px-10"
							>
								<div className="flex gap-x-2 items-center relative">
									<span className="bg-primary w-2 h-2 xxl:w-2.5 xxl:h-2.5 rounded-full animate-ping [animation-duration:0.9s] absolute top-2 md:top-2 md:-left-4"></span>
									<span className="bg-primary w-2 h-2 xxl:w-2.5 xxl:h-2.5 rounded-full  absolute top-2 md:top-2 md:-left-4"></span>
									<span className="text-white text-center text-[18px] font-normal ml-3 xxl:ml-1 md:m-auto">
										Live Preview
									</span>
								</div>
								<p className="text-primary text-[14px] xxl:text-[0.7em] text-left ml-3 md:m-auto">
									for{pubName && <span className="capitalize"> {pubName}</span>}
								</p>
							</a>
						</div>
						<div className="inset-0 bg-transparent z-10 sec-container flex flex-1 items-start">
							<div className="relative">
								<div className="text-primaryTextColor bottom-0">
									{/* <p className="font-medium lg:text-[28px]">
										Big Tech Is Transforming Discovery To Commerce
									</p> */}
									<h1 className="py-4 custom-text-sm-medium md:text-[32px] md:mt-[5%] md:mb-[20px] md:w-[95%]">
										<HighlightedText text={'Everything'} /> to Drive In-app Commerce For Higher User
										Engagement and Growth
									</h1>
									<div className="flex gap-x-3 custom-text-xs font-medium">
										<div className="bg-[#fff9e6] sm:text-center lg:p-5 rounded-lg relative">
											Technology
											<div className="absolute lg:h-full bg-primary 2xl:py-2 lg:w-1.5 sm:w-full sm:h-1.5 left-0 top-0"></div>
										</div>
										<div className="bg-[#fff9e6] sm:text-center lg:p-5 rounded-lg relative">
											Operations
											<div className="absolute lg:h-full bg-primary 2xl:py-2 lg:w-1.5 sm:w-full sm:h-1.5 left-0 top-0"></div>
										</div>
										<div className="bg-[#fff9e6] sm:text-center lg:p-5 rounded-lg relative">
											Brand Supply
											<div className="absolute lg:h-full bg-primary 2xl:py-2 lg:w-1.5 sm:w-full sm:h-1.5 left-0 top-0"></div>
										</div>
										<div className="bg-[#fff9e6] sm:text-center lg:p-5 rounded-lg relative">
											Intelligence
											<div className="absolute lg:h-full bg-primary 2xl:py-2 lg:w-1.5 sm:w-full sm:h-1.5 left-0 top-0"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="h-[90%] rounded-b-full min-w-[40%] bg-secondary sm:hidden lg:block">
						<div className="flex justify-center items-center h-full">
							<DPVideo
								id="videoDiv"
								className="h-[60%] bg-secondary w-fit object-cover"
								src="/thebump-1.mp4"
							/>
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
