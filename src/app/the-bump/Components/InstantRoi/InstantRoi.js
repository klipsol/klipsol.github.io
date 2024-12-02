import HighlightedText from '../HighlightedText/HighlightedText';

export default function InstantRoi() {
	return (
		<section className="sec-container md:h-screen sm:pb-10 relative flex sm:justify-end md:justify-center sm:px-[10px] lg:flex-row sm:flex-col-reverse w-full">
			<div className="lg:w-[65%] md:h-[100vh] sm:w-full flex gap-x-3 mt-4 lg:mt-0">
				<div className="bg-[#EEF0F8] sm:rounded-t-3xl flex flex-col justify-center lg:rounded-none overflow-hidden w-[50%]">
					{/* <div className="bg-[#C4C7D5] h-[90px] text-[#234651] rounded-t-3xl sm:mt-0 lg:mt-10 items-center subtitle font-semibold flex justify-center">
						Build In-House
					</div> */}
					<div className="bg-[#C4C7D5] text-[#234651] py-3 items-center subtitle font-semibold flex justify-center">
						Build In-House
					</div>
					<div className="lg:mt-[30%] sm:mt-[20%] flex flex-col w-full gap-y-10 pb-4 2xl:gap-y-14 items-end text-[#505C6E]">
						<div className="flex justify-end sm:flex-col lg:flex-row lg:w-[80%] sm:w-[95%] gap-x-10 items-center 2xl:text-2xl">
							<h2 className="font-semibold self-start lg:self-auto ml-4 lg:m-auto">Cost</h2>
							<div className="justify-center min-w-[90%] sm:w-full sm:text-sm lg:text-base inline-flex items-center px-4 py-2  2xl:py-10 2xl:rounded-l-[45px] max-h-[55px]  bg-white rounded-l-3xl  text-[#505C6E]">
								1M+ per year
							</div>
						</div>
						<div className="flex sm:flex-col lg:flex-row justify-end lg:w-[80%] sm:w-[95%] gap-x-10 items-center 2xl:text-2xl">
							<h2 className="font-semibold self-start lg:self-auto ml-4 lg:m-auto">Time</h2>
							<div className="justify-center min-w-[90%] sm:w-full sm:text-sm lg:text-base inline-flex items-center px-4 py-2 2xl:py-10 2xl:rounded-l-[45px] max-h-[55px] bg-white rounded-l-3xl  text-[#505C6E]">
								1+ Year
							</div>
						</div>
						<div className="flex sm:flex-col lg:flex-row justify-end lg:w-[80%] sm:w-[95%] gap-x-10 items-center 2xl:text-2xl">
							<h2 className="font-semibold self-start lg:self-auto ml-4 lg:m-auto">Risk</h2>
							<div className="justify-center min-w-[90%] sm:text-sm lg:text-base sm:w-full inline-flex items-center px-4 py-2 2xl:py-10 2xl:rounded-l-[45px] max-h-[55px] h-[55px] bg-white rounded-l-3xl  text-[#505C6E] ">
								Uncertain Quality <br className="lg:hidden" /> & Output
							</div>
						</div>
					</div>
				</div>
				<div className="bg-[#FEF4D3] sm:rounded-t-3xl lg:rounded-none flex flex-col justify-center overflow-hidden w-[50%]">
					{' '}
					<div className="bg-[#FFE89B] text-[#234651] py-3 subtitle items-center font-semibold flex justify-center">
						Dpanda
					</div>
					<div className="lg:mt-[30%] sm:mt-[20%] flex flex-col w-full pb-4 gap-y-10 2xl:gap-y-14 items-start text-[#505C6E] sm:h-full md:h-auto">
						<div className="flex justify-start sm:flex-col lg:flex-row w-[90%] gap-x-10 items-center">
							<br className="lg:hidden" />
							<div className="text-center font-bold sm:text-sm lg:text-base text-[#1d234e] 2xl:py-10 2xl:rounded-r-[45px] custom-text-sm-medium px-4 py-2 max-h-[55px] justify-center inline-flex items-center   w-full bg-[#FFE89C] rounded-r-3xl   ">
								Free
							</div>
						</div>
						<div className="flex justify-start sm:flex-col lg:flex-row w-[90%] gap-x-10 items-center">
							{' '}
							<br className="lg:hidden" />
							<div className="text-center font-bold sm:text-sm lg:text-base text-[#1d234e] 2xl:py-10 2xl:rounded-r-[45px] custom-text-sm-medium px-4 py-2 max-h-[55px] justify-center inline-flex items-center w-full   bg-[#FFE89C] rounded-r-3xl   ">
								{'< 5 Days'}
							</div>
						</div>
						<div className="flex justify-start sm:flex-col lg:flex-row w-[90%] gap-x-10 items-center">
							{' '}
							<br className="lg:hidden" />
							<div className="text-center font-bold sm:text-sm lg:text-base text-[#1d234e] 2xl:py-10 2xl:rounded-r-[45px] custom-text-sm-medium px-4 max-h-[55px] h-[55px] py-2 justify-center inline-flex items-center w-full    bg-[#FFE89C] rounded-r-3xl   ">
								Delivered Upfront
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="lg:w-[35%] flex lg:flex-col sm:my-4 lg:my-0 sm:flex-row sm:gap-x-2 lg:justify-center lg:px-8 gap-y-3 sm:p-0 sm:w-full">
				<h1 className="text-[#023046]/20 title font-semibold leading-[1] sm:mt-1 lg:m-0">04</h1>
				<div className="sm:pl-[12px] md:pl-0">
					<h1 className="title text-[#1D234E] font-medium leading-[1.2] mb-[15px]">
						<HighlightedText text="Instant ROI" wrapperClass="bottom-2 h-[30%] bottom-1" />{' '}
					</h1>
					<p className="2xl:text-2xl text-[#505C6E]">
						Product delivered upfront.
						<span className="font-semibold"> Fast and Free.</span>
					</p>
				</div>
			</div>
			{/* <hr className="bottom-0 absolute w-full custom-hr  lg:block" /> */}
		</section>
	);
}
