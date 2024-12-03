import { CheckIcon, MoveRight, XIcon } from 'lucide-react';
import Link from 'next/link';
import HighlightedText from '../HighlightedText/HighlightedText';

const CoreFeatures = () => {
	return (
		<div className="bg-brand/15 pb-10 flex ">
			<div className="lg:sec-container w-full">
				<h1 className="text-secondary font-semibold title lg:text-center my-8 lg:mt-[60px] lg:mb-[60px] px-2 lg:py-0">
					<HighlightedText wrapperClass="bottom-[10%]" text="Full-Stack"></HighlightedText> eCommerce Over
					SAAS
				</h1>
				<div className="flex justify-between sm:gap-x-1 px-1">
					<div className="bg-white lg:bg-transparent sm:rounded-t-2xl lg:rounded-t-3xl overflow-hidden">
						<h2 className="text-[#505C6E] font-semibold custom-text-base lg:mb-4 bg-[#C4C7D5] lg:bg-transparent md:text-left sm:text-center py-1 lg:py-2">
							Core <br className="lg:hidden" /> Features
						</h2>
						<div className="grid gap-4 text-[#505C6E] lg:px-5 lg:pl-0 pb-4 text-sm font-medium lg:text-[1.125em] 2xl:text-[1.6em]">
							<div className="flex flex-col items-center lg:flex-row lg:items-center sm:text-center lg:text-left border-t-[3px] lg:border-none border-[#FFFAEA] px-1 lg:pl-0 py-2">
								<CheckIcon className="text-green-500 mr-2 mb-2 lg:mb-0 sm:invisible" />
								<span>Seamless Integration</span>
							</div>
							<div className="flex flex-col items-center lg:flex-row lg:items-center sm:text-center lg:text-left border-t-[3px] lg:border-none border-[#FFFAEA] px-1 lg:pl-0 py-2">
								<CheckIcon className="text-green-500 mr-2 mb-2 lg:mb-0 sm:invisible" />
								<span>Brand Enablement</span>
							</div>
							<div className="flex flex-col items-center lg:flex-row lg:items-center sm:text-center lg:text-left border-t-[3px] lg:border-none border-[#FFFAEA] px-1 lg:pl-0 py-2">
								<CheckIcon className="text-green-500 mr-2 mb-2 lg:mb-0 sm:invisible" />
								<span>
									Smart <br className="lg:hidden" /> Cart
								</span>
							</div>
							<div className="flex flex-col items-center lg:flex-row lg:items-center sm:text-center lg:text-left border-t-[3px] lg:border-none border-[#FFFAEA] px-1 lg:pl-0 py-2">
								<CheckIcon className="text-green-500 mr-2 mb-2 lg:mb-0 sm:invisible" />
								<span>Shopper Marketing</span>
							</div>
							<div className="flex flex-col items-center lg:flex-row lg:items-center sm:text-center lg:text-left border-t-[3px] lg:border-none border-[#FFFAEA] px-1 lg:pl-0 py-2">
								<CheckIcon className="text-green-500 mr-2 mb-2 lg:mb-0 sm:invisible" />
								<span>Operations (team)</span>
							</div>
							<div className="flex flex-col items-center lg:flex-row lg:items-center sm:text-center lg:text-left border-t-[3px] lg:border-none border-[#FFFAEA] px-1 lg:pl-0 py-2">
								<CheckIcon className="text-green-500 mr-2 mb-2 lg:mb-0 sm:invisible" />
								<span>
									AI <br className="lg:hidden" /> Intelligence
								</span>
							</div>
							<div className="flex flex-col items-center lg:flex-row lg:items-center sm:text-center lg:text-left border-t-[3px] lg:border-none border-[#FFFAEA] px-1 lg:pl-0 py-2">
								<CheckIcon className="text-green-500 mr-2 mb-2 lg:mb-0 sm:invisible" />
								<span>Advance Analytics</span>
							</div>
							<div className="flex flex-col items-center lg:flex-row lg:items-center sm:text-center lg:text-left border-t-[3px] lg:border-none border-[#FFFAEA] px-1 lg:pl-0 py-2">
								<CheckIcon className="text-green-500 mr-2 mb-2 lg:mb-0 sm:invisible" />
								<span>Marketplace Features</span>
							</div>
						</div>
					</div>
					<div className="bg-[#EEF0F8] sm:rounded-t-2xl lg:rounded-t-3xl overflow-hidden">
						<h2 className="text-[#505C6E] font-semibold custom-text-base lg:mb-4 bg-[#C4C7D5] text-center py-1 lg:py-2">
							Checkout <br className="lg:hidden" /> SAAS
						</h2>
						<div className="grid grid-cols-1 gap-4 text-[#505C6E]  lg:px-5 pb-4 text-sm font-medium lg:text-[1.125em] 2xl:text-[1.6em]">
							<div className="flex flex-col items-center lg:flex-row lg:items-center sm:text-center lg:text-left border-t-[3px] lg:border-none px-2 border-[#FFFAEA]  py-2 ">
								<XIcon className="text-red-500 mr-2 mb-2 lg:mb-0" />
								<span>
									Manual,
									<br className="lg:hidden" /> link by Link
								</span>
							</div>
							<div className="flex flex-col items-center lg:flex-row lg:items-center sm:text-center lg:text-left border-t-[3px] lg:border-none px-2 border-[#FFFAEA]  py-2 ">
								<XIcon className="text-red-500 mr-2 mb-2 lg:mb-0" />
								<span>Limited, no personalisation</span>
							</div>
							<div className="flex flex-col items-center lg:flex-row lg:items-center sm:text-center lg:text-left border-t-[3px] lg:border-none px-2 border-[#FFFAEA]  py-2 ">
								<XIcon className="text-red-500 mr-2 mb-2 lg:mb-0" />
								<span>Manual cart creation</span>
							</div>
							<div className="flex flex-col items-center lg:flex-row lg:items-center sm:text-center lg:text-left border-t-[3px] lg:border-none px-2 border-[#FFFAEA]  py-2 ">
								<XIcon className="text-red-500 mr-2 mb-2 lg:mb-0" />
								<span>
									Minimal <br className="lg:hidden" /> tools
								</span>
							</div>
							<div className="flex flex-col items-center lg:flex-row lg:items-center sm:text-center lg:text-left border-t-[3px] lg:border-none px-2 border-[#FFFAEA]  py-2 ">
								<XIcon className="text-red-500 mr-2 mb-2 lg:mb-0" />
								<span>
									Not <br className="lg:hidden" />
									included
								</span>
							</div>
							<div className="flex flex-col items-center lg:flex-row lg:items-center sm:text-center lg:text-left border-t-[3px] lg:border-none px-2 border-[#FFFAEA]  py-2 ">
								<XIcon className="text-red-500 mr-2 mb-2 lg:mb-0" />
								<span>
									Not <br className="lg:hidden" /> included
								</span>
							</div>
							<div className="flex flex-col items-center lg:flex-row lg:items-center sm:text-center lg:text-left border-t-[3px] lg:border-none px-2 border-[#FFFAEA]  py-2 ">
								<XIcon className="text-red-500 mr-2 mb-2 lg:mb-0" />
								<span>
									Limited <br className="lg:hidden" /> reporting
								</span>
							</div>
							<div className="flex flex-col items-center lg:flex-row lg:items-center sm:text-center lg:text-left border-t-[3px] lg:border-none px-2 border-[#FFFAEA]  py-2 ">
								<XIcon className="text-red-500 mr-2 mb-2 lg:mb-0" />
								<span>
									Not <br className="lg:hidden" /> included
								</span>
							</div>
						</div>
					</div>
					<div className="bg-[#FEF4D3] sm:rounded-t-2xl lg:rounded-t-3xl overflow-hidden">
						<h2 className="text-[#505C6E] font-semibold custom-text-base lg:mb-4 bg-[#F7BB30] text-center py-1 lg:py-2">
							Dpanda: Full Stack <br className="lg:hidden" /> eCommerce
						</h2>
						<div className="grid gap-4 text-[#505C6E] lg:px-5 pb-4 text-sm font-medium lg:text-[1.125em] 2xl:text-[1.6em]">
							<div className="flex flex-col items-center lg:flex-row lg:items-center sm:text-center lg:text-left border-t-[3px] lg:border-none border-[#FFFAEA] px-1 py-2 ">
								<CheckIcon className="text-green-500 mr-2 mb-2 lg:mb-0" />
								<span>
									Effortless,
									<br className="lg:hidden" /> one-time
								</span>
							</div>
							<div className="flex flex-col items-center lg:flex-row lg:items-center sm:text-center lg:text-left border-t-[3px] lg:border-none border-[#FFFAEA] px-1 py-2 ">
								<CheckIcon className="text-green-500 mr-2 mb-2 lg:mb-0" />
								<span>Bidding & personalisation</span>
							</div>
							<div className="flex flex-col items-center lg:flex-row lg:items-center sm:text-center lg:text-left border-t-[3px] lg:border-none border-[#FFFAEA] px-1 py-2 ">
								<CheckIcon className="text-green-500 mr-2 mb-2 lg:mb-0" />
								<span>
									Unified,
									<br className="lg:hidden" /> feature-rich
								</span>
							</div>
							<div className="flex flex-col items-center lg:flex-row lg:items-center sm:text-center lg:text-left border-t-[3px] lg:border-none border-[#FFFAEA] px-1 py-2 ">
								<CheckIcon className="text-green-500 mr-2 mb-2 lg:mb-0" />
								<span>
									Integrated <br className="lg:hidden" /> optimization
								</span>
							</div>
							<div className="flex flex-col items-center lg:flex-row lg:items-center sm:text-center lg:text-left border-t-[3px] lg:border-none border-[#FFFAEA] px-1 py-2 ">
								<CheckIcon className="text-green-500 mr-2 mb-2 lg:mb-0" />
								<span>Marketing, customer ops & more</span>
							</div>
							<div className="flex flex-col items-center lg:flex-row lg:items-center sm:text-center lg:text-left border-t-[3px] lg:border-none border-[#FFFAEA] px-1 py-2 ">
								<CheckIcon className="text-green-500 mr-2 mb-2 lg:mb-0" />
								<span>
									Personalized <br className="lg:hidden" /> & adaptive
								</span>
							</div>
							<div className="flex flex-col items-center lg:flex-row lg:items-center sm:text-center lg:text-left border-t-[3px] lg:border-none border-[#FFFAEA] px-1 py-2 ">
								<CheckIcon className="text-green-500 mr-2 mb-2 lg:mb-0" />
								<span>
									Integrated <br className="lg:hidden" /> & network level
								</span>
							</div>
							<div className="flex flex-col items-center lg:flex-row lg:items-center sm:text-center lg:text-left border-t-[3px] lg:border-none border-[#FFFAEA] px-1 py-2 ">
								<CheckIcon className="text-green-500 mr-2 mb-2 lg:mb-0" />
								<span>
									Mini-marketplace <br className="lg:hidden" /> ecosystem
								</span>
							</div>
						</div>
					</div>
				</div>
				<Link href={'/features'}>
					<div className="sm:hidden lg:flex justify-end">
						<div className="text-[#505C6E] hover:underline cursor-pointer flex gap-x-1 items-center custom-text-xs mt-4">
							<span className="">See all features</span>
							<MoveRight color="#505C6E" className="size-4" />
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default CoreFeatures;
