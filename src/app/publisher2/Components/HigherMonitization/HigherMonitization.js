import HighlightedText from '../HighlightedText/HighlightedText';

export default function HigherMonitization() {
	return (
		<section className="bg-[#FEF4D4] lg:bg-white md:py-20 py-10 md:px-10 sm:px-7">
			<div className="sec-container flex flex-col lg:flex-row">
				{' '}
				<div className="md:py-10 sm:py-7">
					<h1 className="title text-[#1D234E] leading-[1.2] font-medium md:text-[40px] sm:text-[28px]">
						<HighlightedText text="Higher" /> <br className="" /> Monetization{' '}
					</h1>
					<div className="flex gap-x-4 mt-10 xxl:mt-[7%] justify-start text-primaryTextColor ">
						<div className="bg-[#FFF9E6] rounded-2xl whitespace-nowrap custom-text-sm relative 2xl:min-w-[188px] lg:w-[120px] sm:rounded-xl sm:w-[110px] sm:px-2 sm:py-2">
							<h1 className="absolute md:top-[-25px] sm:top-[-18px] md:text-[40px] sm:text-[28px] md:font-bold sm:font-light title left-[10px] text-[#9E8637] leading-tight">
								01
							</h1>
							<h1 className="font-medium md:text-[18px] sm:text-[16px] custom-text-sm pt-[19px] pr-[22px] pb-[10px] pl-[13px] sm:leading-[1.2]">
								User <br />
								Experience
							</h1>
						</div>
						<div className="bg-[#FFF9E6] rounded-2xl whitespace-nowrap custom-text-sm 2xl:min-w-[188px] relative h-fit lg:w-[120px] sm:rounded-xl sm:w-[110px] sm:px-2 sm:py-2">
							<h1 className="absolute md:top-[-25px] sm:top-[-18px] md:text-[40px] sm:text-[28px] md:font-bold sm:font-light title left-[10px] text-[#9E8637] leading-tight">
								02
							</h1>
							<h1 className="font-medium md:text-[18px] sm:text-[16px] custom-text-sm pt-[19px] pr-[22px] pb-[10px] pl-[13px] sm:leading-[1.2] ">
								Lifetime <br />
								Value
							</h1>
						</div>
						<div className="bg-[#FFF9E6] rounded-2xl whitespace-nowrap custom-text-sm 2xl:min-w-[188px] relative w-fit h-fit lg:w-[120px] sm:rounded-xl sm:w-[110px] sm:px-2 sm:py-2">
							<h1 className="absolute md:top-[-25px] sm:top-[-18px] md:text-[40px] sm:text-[28px] md:font-bold sm:font-light title left-[10px] text-[#9E8637] leading-tight">
								03
							</h1>
							<h1 className="font-medium md:text-[18px] sm:text-[16px] custom-text-sm pt-[19px] pr-[22px] pb-[10px] pl-[13px] sm:leading-[1.2]">
								First-Party <br />
								Insights
							</h1>
						</div>
					</div>
				</div>
				<hr className="w-full my-8 border-gray-400/50 lg:hidden " />
				<div className="w-0.5 bg-gray-300"></div>
				<div className="md:py-10 sm:py-7">
					<h1 className="title text-[#1D234E] leading-[1.2] font-medium md:text-[40px] sm:text-[28px]">
						<span className="font-semibold">At </span> <HighlightedText text="Zero" /> <br className="" />
						Upfront Cost{' '}
					</h1>
					<div className="flex gap-x-4 mt-10 xxl:mt-[7%] justify-start text-primaryTextColor">
						<div className="bg-[#FFF9E6] rounded-2xl whitespace-nowrap custom-text-sm relative 2xl:min-w-[188px] lg:w-[120px] sm:rounded-xl sm:w-[110px] sm:px-2 sm:py-2">
							<h1 className="absolute md:top-[-25px] sm:top-[-18px] md:text-[40px] sm:text-[28px] md:font-bold sm:font-light title left-[10px] text-[#9E8637] leading-tight">
								01
							</h1>
							<h1 className="font-medium md:text-[18px] sm:text-[16px] custom-text-sm pt-[19px] pr-[22px] pb-[10px] pl-[13px] sm:leading-[1.2]">
								One Time <br /> Plugins
							</h1>
						</div>
						<div className="bg-[#FFF9E6] rounded-2xl whitespace-nowrap custom-text-sm 2xl:min-w-[188px] relative h-fit lg:w-[120px] sm:rounded-xl sm:w-[110px] sm:px-2 sm:py-2">
							<h1 className="absolute md:top-[-25px] sm:top-[-18px] md:text-[40px] sm:text-[28px] md:font-bold sm:font-light title left-[10px] text-[#9E8637] leading-tight">
								02
							</h1>
							<h1 className="font-medium md:text-[18px] sm:text-[16px] custom-text-sm pt-[19px] pr-[22px] pb-[10px] pl-[13px] sm:leading-[1.2] ">
								Everything <br /> Commerce
							</h1>
						</div>
						<div className="bg-[#FFF9E6] rounded-2xl whitespace-nowrap custom-text-sm 2xl:min-w-[188px] relative w-fit h-fit lg:w-[120px] sm:rounded-xl sm:w-[110px] sm:px-2 sm:py-2">
							<h1 className="absolute md:top-[-25px] sm:top-[-18px] md:text-[40px] sm:text-[28px] md:font-bold sm:font-light title left-[10px] text-[#9E8637] leading-tight">
								03
							</h1>
							<h1 className="font-medium md:text-[18px] sm:text-[16px] custom-text-sm pt-[19px] pr-[22px] pb-[10px] pl-[13px] sm:leading-[1.2]">
								Direct From <br /> Brands
							</h1>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
