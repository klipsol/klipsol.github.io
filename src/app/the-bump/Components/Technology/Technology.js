'use client';
import HighlightedText from '../HighlightedText/HighlightedText';
import { Chip } from '../UI/Chip/Chip';

export default function Technology() {
	const leftPhoneChipData = [
		{
			icon: '/end-to-end-tech.png',
			label: (
				<>
					End-to-End <br /> Technology
				</>
			),
			className:
				'featurechips-l featurechips absolute bg-action/70 saturate-150 brightness-100 right-[70%] top-[20%] w-[160px]',
		},
		{
			icon: '/ai.png',
			label: (
				<>
					AI Based <br /> Recommendation
				</>
			),
			className:
				'featurechips-l featurechips absolute bg-action/70 saturate-150 brightness-100 right-[70%] top-[45%] w-[160px]',
		},
		{
			icon: '/data_and_analytics.png',
			label: (
				<>
					Data & <br />
					Analytics
				</>
			),
			className:
				'featurechips-l featurechips absolute bg-action/70 saturate-150 brightness-100 right-[70%] top-[70%] w-[160px]',
		},
		{
			icon: '/payment.png',
			label: (
				<>
					Payments & <br /> Settlements
				</>
			),
			className: 'featurechips-r featurechips absolute left-[70%] top-[20%] bg-brand/70 text-white w-[160px]',
		},
		{
			icon: '/cata.png',
			label: (
				<>
					Catalogue & <br /> Pricing
				</>
			),
			className: 'featurechips-r featurechips absolute left-[70%] top-[45%] bg-brand/70 text-white w-[160px]',
		},
		{
			icon: '/cust.png',
			label: (
				<>
					Customer <br /> Escalations
				</>
			),
			className: 'featurechips-r featurechips absolute left-[70%] top-[70%] bg-brand/70 text-white w-[160px]',
		},
	];

	return (
		<section className="md:h-screen relative w-full">
			{/* bg */}
			<div className="lg:h-[50vh] sm:h-[40vh] md:h-[30vh] bg-brand w-full"></div>
			<div className="sm:h-[750px] lg:h-[50vh] bg-transparent w-full"></div>

			{/* actual content starts here */}
			<div className="absolute inset-0 sec-container lg:pt-[60px]">
				<div className="relative lg:my-5 sm:my-2 xxl:mt-[5%] mx-auto md:w-[60%]">
					<h1 className="text-primary font-semibold title sm:text-center px-2 lg:py-0">
						Everything To{' '}
						<HighlightedText wrapperClass="bottom-[10%]" text="Embed Brands"></HighlightedText> On Your Site
					</h1>
				</div>
				<div className="h-fit w-full lg:h-[65%] flex sm:justify-start lg:justify-around sm:flex-col lg:flex-row">
					<div className="lg:w-[50%]  h-[40%] lg:h-[80%] xxl:h-[70%] flex flex-col items-center relative ">
						<h1 className="subtitle mb-[8%] text-primary font-medium lg:text[36px]">
							Technology & Operations Support
						</h1>
						<div className="relative h-[60%] lg:h-full sm:w-[40%] md:w-fit ">
							{leftPhoneChipData.map((data) => (
								<Chip key={data.icon} {...data} />
							))}
							<img className="h-full" src="/phone2.png" alt="phone" />
						</div>
						<p className="text-center max-w-[60%] lg:max-w-[300px] custom-text-sm lg:text-[24px] text-[#505C6E] mt-5 lg:font-normal">
							Highly Configurable and White-labelled.
						</p>
					</div>

					<div className="custom-vr sm:hidden lg:block"></div>
					<div className="custom-hr mt-4 lg:hidden"></div>

					<div className="sm:w-full lg:w-[50%] h-[40%] lg:h-[80%] xxl:h-[70%] sm:pb-[10px] md:pb-0  flex flex-col items-center relative ">
						<h1 className="subtitle mb-[8%] text-primary font-medium sm:mt-6 lg:mt-0 lg:text[36px]">
							Brand Supply & Integrations
						</h1>
						<div className="relative sm:h-[60%] lg:h-full sm:w-[60%] md:w-fit">
							<img className="h-full" src="/brandonboard.png" alt="phone" />
						</div>
						<p className="text-center custom custom-text-sm lg:text-[24px]  text-[#505C6E] mt-5 max-w-[60%] lg:max-w-[300px] lg:font-normal">
							Apps, Plugins & Dashboards to Sync You with Brands.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
