'use client';
import HighlightedText from '../HighlightedText/HighlightedText';
import { Chip } from '../UI/Chip/Chip';

export default function Technology() {
	// useEffect(() => {
	//   gsap.registerPlugin(ScrollTrigger);

	//   const tl = gsap.timeline({
	//     scrollTrigger: {
	//       trigger: sectionRef.current,
	//       start: "top center",
	//       toggleActions: "play none none reverse",
	//     },
	//   });

	//   // Pop animation for each element
	//   ["#T-end", "#T-ai", "#T-data", "#T-retarget"].forEach((target, index) => {
	//     tl.fromTo(
	//       target,
	//       {
	//         opacity: 0,
	//         scale: 0.5,
	//         y: 50,
	//       },
	//       {
	//         opacity: 1,
	//         scale: 1,
	//         y: 0,
	//         duration: 0.7,
	//         ease: "back.out(1.7)", // This creates the pop-out elastic effect
	//       },
	//       index * 0.4 // Stagger the animations by 0.3 seconds
	//     );
	//   });

	//   return () => {
	//     tl.kill();
	//     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
	//   };
	// }, []);

	const leftPhoneChipData = [
		{
			icon: '/end-to-end-tech.png',
			label: (
				<>
					End-to-End <br /> Technology
				</>
			),
			className: 'absolute top-[15%] -left-[100px]  lg:-left-[115px] 2xl:-left-[120px]',
		},
		{
			icon: '/data_and_analytics.png',
			label: (
				<>
					Data & <br />
					Analytics
				</>
			),
			className: 'absolute sm:bottom-[10%] bottom-[25%] -left-[90px] lg:-left-[100px] 2xl:-left-[110px]',
		},
		{
			icon: '/ai.png',
			label: (
				<>
					AI Based <br /> Recommendation
				</>
			),
			className: 'absolute top-[40%] -left-[110px] lg:-left-[150px] 2xl:-right-[170px]',
		},
		{
			icon: '/payment.png',
			label: (
				<>
					Payments & <br /> Settlements
				</>
			),
			className:
				'absolute top-[15%] lg:lg:-right-[120px] -right-[100px] bg-[#033046] 2xl:-left-[130px] text-white',
		},
		{
			icon: '/cata.png',
			label: (
				<>
					Catalogue & <br /> Pricing
				</>
			),
			className:
				'absolute  top-[40%] lg:-right-[120px] -right-[110px] bg-[#033046] 2xl:-right-[120px] text-white',
		},
		{
			icon: '/cust.png',
			label: (
				<>
					Customer <br /> Escalations
				</>
			),
			className:
				'absolute sm:bottom-[10%] bottom-[25%] -right-[100px] bg-[#033046] 2xl:-right-[130px] text-white',
		},
	];

	return (
		<section className="md:h-screen relative w-full">
			{/* bg */}
			<div className="lg:h-[50vh] sm:h-[30vh] bg-[#F7BB30] w-full"></div>
			<div className="sm:h-[750px] lg:h-[50vh] bg-transparent w-full"></div>

			{/* actual content starts here */}
			<div className="absolute inset-0 sec-container lg:pt-[60px]">
				<div className="lg:h-[15%] sm:h-[10%] relative lg:my-5 sm:my-2 xxl:mt-[5%]">
					{/* <h1 className="text-[#1D234E] text-[60px] leading-tight title text-center font-medium absolute lg:pb-[35px] top-1/2 left-1/2 -translate-x-1/2 whitespace-nowrap -translate-y-1/2">
						Everything To{' '}
						<HighlightedText text="Embed Brands" wrapperClass="bg-[#ffdf74] bottom-2 h-[35%]" /> <br /> On
						Your Site
					</h1> */}
					<h1 className="text-[#1D234E] font-semibold title lg:text-center my-8 lg:my-10 px-2 lg:py-0">
						Everything To{' '}
						<HighlightedText wrapperClass="bottom-[10%]" text="Embed Brands"></HighlightedText> On Your Site
					</h1>
				</div>
				<div className="h-fit w-full lg:h-[65%] flex sm:justify-start lg:justify-around sm:flex-col lg:flex-row">
					<div className="lg:w-[50%]  h-[40%] lg:h-[80%] xxl:h-[70%] flex flex-col items-center relative ">
						<h1 className="subtitle mb-[8%] text-[#1D234E] font-medium lg:text[36px]">
							Technology & Operations Support
						</h1>
						<div className="relative h-[60%] lg:h-full  w-fit ">
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

					<div className="sm:w-full lg:w-[50%] h-[40%] lg:h-[80%] xxl:h-[70%]   flex flex-col items-center relative ">
						<h1 className="subtitle mb-[8%] text-[#1D234E] font-medium sm:mt-6 lg:mt-0 lg:text[36px]">
							Brand Supply & Integrations
						</h1>
						<div className="relative sm:h-[60%] lg:h-full w-fit">
							<img className="h-full" src="/brandonboard.png" alt="phone" />
						</div>
						<p className="text-center custom custom-text-sm lg:text-[24px]  text-[#505C6E] mt-5 lg:max-w-[300px] lg:font-normal">
							Apps, Plugins & Dashboards to Sync You with Brands.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
