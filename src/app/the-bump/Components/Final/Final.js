import HighlightedText from '../HighlightedText/HighlightedText';

export default function Final() {
	return (
		<section className="pb-16 bg-white sm:px-[10px] md:px-0 flex flex-col relative overflow-hidden ">
			<div className="sec-container w-full  h-full">
				<h1 className="title font-medium text-[#1D234E] sm:my-[60px] w-[60%] ">
					Built on <HighlightedText wrapperClass="bottom-1 h-[35%]" text="Trust" />{' '}
				</h1>
				<div className="flex lg:justify-around sm:justify-between text-[#013046] mt-[5%]">
					<div className="flex items-center  gap-x-8 sm:flex-col lg:flex-row">
						<img className="xl:h-64 sm:h-36  2xl:h-80" src="/ceo.png" alt="ceo" />
						<div className=" sm:mt-3 lg:mt-0">
							<h2 className="font-medium custom-text-sm-medium">Rajat Dhanda</h2>
							<h6 className="custom-text-sm">CEO & Co-founder</h6>
							<div className="flex lg:mt-5 sm:mt-2 gap-x-3">
								<img className="lg:h-7 sm:h-5" src="/uniliver-sm.png" />
								<img className="lg:h-7 sm:h-5" src="/sb.png" />
							</div>
							<a
								href="https://www.linkedin.com/in/rajatdhanda/"
								target="_blank"
								className="flex lg:mt-5 sm:mt-2 gap-x-3"
							>
								<img className="lg:h-7 sm:h-5" src="/linkedin-logo.svg" />
							</a>
						</div>
					</div>
					<div className="flex items-center  gap-x-8 sm:flex-col lg:flex-row">
						<img className="xl:h-64 sm:h-36 2xl:h-80 " src="/cto.png" alt="ceo" />
						<div className="sm:mt-3 lg:mt-0">
							<h2 className="font-medium custom-text-sm-medium">Gaurav Gupta</h2>
							<h6 className="custom-text-sm">CTO & Co-founder</h6>
							<div className="flex lg:mt-5 sm:mt-2 gap-x-3">
								<img className="lg:h-7 sm:h-5" src="/google.png" />
								<img className="lg:h-7 sm:h-5" src="/amazon.png" />
								<img className="lg:h-7 sm:h-5" src="/yahoo.png" />
							</div>
							<a
								href="https://www.linkedin.com/in/ggupta1/"
								target="_blank"
								className="flex lg:mt-5 sm:mt-2 gap-x-3"
							>
								<img className="lg:h-7 sm:h-5" src="/linkedin-logo.svg" />
							</a>
						</div>
					</div>
				</div>
				<div className="mt-[4%] 2xl:mt-[10%] flex sm:flex-col lg:flex-row gap-x-8 title items-center text-[#1D234E] ">
					<div className="font-bold sm:w-full text-center lg:w-fit sm:my-4 ">
						Backed <span className="font-medium">By</span>
					</div>
					<div className="grid grid-cols-2 gap-4 lg:flex lg:flex-nowrap">
						<div className="bg-brand/20 h-fit rounded-3xl 2xl:rounded-[35px] px-5 py-4 2xl:py-5 2xl:px-7 shadow-sm transition-shadow">
							<img src="/accel.png" alt="accel" className="h-5 2xl:h-10 object-contain mx-auto" />
						</div>
						<div className="bg-brand/20 h-fit rounded-3xl 2xl:rounded-[35px] px-5 py-4 2xl:py-5 2xl:px-7 shadow-sm transition-shadow">
							<img
								src="/lightspeed.png"
								alt="lightspeed"
								className="h-5 2xl:h-10 object-contain mx-auto"
							/>
						</div>
						<div className="bg-brand/20 h-fit rounded-3xl 2xl:rounded-[35px] px-5 py-4 2xl:py-5 2xl:px-7 shadow-sm transition-shadow">
							<img src="/sauce.png" alt="sauce" className="h-5 2xl:h-10 object-contain mx-auto" />
						</div>
						<div className="bg-brand/20 h-fit rounded-3xl 2xl:rounded-[35px] px-5 py-4 2xl:py-5 2xl:px-7 shadow-sm transition-shadow">
							<img
								src="/whiteboard2.png"
								alt="whiteboard2"
								className="h-5 2xl:h-10 object-contain mx-auto"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
