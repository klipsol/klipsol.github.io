import CTAsSection from '../CTAsSection';
import FloatingCallout from '../FloatingCallout';
import WidgetSummaryTable from '../WidgetSummaryTable';

const WidgetTab = ({ selectedTab }) => {
	return (
		<div className="text-black">
			<h4 className="text-2xl font-semibold text-white w-fit m-auto pt-4">
				Interactive Demo: AI-Powered CTAs and User Journeys
				<div className="bg-white h-[1px] mt-1 mb-4"></div>
			</h4>
			<div className="max-w-3xl mx-auto p-6 border-2 border-gray-500 rounded-2xl bg-white my-10">
				<div>
					<p>
						<span className="font-bold">01. </span>
						{`Seamlessly embed AI-driven 'Buy Now' buttons on any product review.`}{' '}
					</p>
					<span
						className="relative flex justify-start mt-2"
						dpw-commerce="true"
						data-dpa-widget-type="product"
						data-dpa-widget-theme="91mobiles"
						data-dpa-product-id="300082"
					>
						<span className="hidden md:block absolute -right-20 -top-16">
							<img src="/arrow-white.svg" alt="noref" />
							<span className="absolute font-semibold text-white top-12 -right-32 w-40">1. Buy Now</span>
						</span>
					</span>
				</div>
			</div>
			<div className="max-w-3xl mx-auto p-6 border-2 border-gray-500 rounded-2xl bg-white my-10">
				<p className="">
					<span className="font-bold">02. </span>
					Add customizable product carousels anywhere on your page, with seamless scrolling for intuitive
					navigation.
				</p>
				<div className="p-2 relative">
					<span className="hidden md:block absolute -right-20 -top-12">
						<img src="/arrow-white.svg" />
						<span className="absolute font-semibold text-white top-12 -right-28 w-36">
							2. Product Carousel
						</span>
					</span>
					<span
						className="dpanda-ad dpanda-product dpandacommerce-catalog-widget dpwc-pf-sty"
						dpw-commerce="true"
						data-dpa-layout="horizontal1"
						data-dpa-widget-type="collection"
						data-dpa-widget-theme="theme1"
						data-dpa-product-id="295027,300084,300083,295028,301032"
					/>
				</div>
			</div>
			<div className="max-w-3xl mx-auto p-6 border-2 border-gray-500 rounded-2xl bg-white my-10">
				<CTAsSection />
			</div>
			<div className="max-w-3xl mx-auto p-6 border-2 border-gray-500 rounded-2xl bg-white my-10">
				{/* Floating CTA */}
				<p className=" relative">
					<span className="font-bold">04. </span>
					Our adaptable widget seamlessly integrates into your layout, offering options like floating icons or
					hyperlinked shoppable texts for maximum flexibility. <br />
					<span
						className="relative text-end"
						dpw-commerce="true"
						data-dpa-widget-type="product"
						data-dpa-widget-theme="product-link"
						data-dpa-product-id="300082"
						data-dpa-element-text="custom text"
					></span>
					<span className="hidden md:block absolute -right-20 -top-5">
						<img src="/arrow-white.svg" />
						<span className="absolute font-semibold text-white top-12 -right-32 w-40">
							4. Text based CTA
						</span>
					</span>
				</p>
			</div>
			<div className="max-w-3xl mx-auto p-6 border-2 border-gray-500 rounded-2xl bg-white my-10">
				<p className="">
					<span className="font-bold">05. </span>
					Dynamic callouts intelligently appear above the fold based on user scroll depth, cohort, and
					context, enhancing engagement
				</p>
				<FloatingCallout />
			</div>
			<div className="max-w-3xl mx-auto p-6 border-2 border-gray-500 rounded-2xl bg-white my-10">
				<div>
					<p className="">
						<span className="font-bold">06. </span>
						Embed a full-featured shopping site directly within your page using our shop CTA.
					</p>
				</div>
				<div>
					<p className="ml-auto relative w-fit">
						<a
							href="https://yourstore.dpanda.online/?user_id=1234567899"
							target="_blank"
							className="bg-blue-500 text-white rounded-md p-2 hover:underline"
						>
							Shop
						</a>
						<span className="hidden md:block absolute -right-20 -top-16">
							<img src="/arrow-white.svg" />
							<span className="absolute font-semibold text-white top-12 -right-32 w-40">
								6. Dedicated microsite for you
							</span>
						</span>
					</p>
				</div>
			</div>
			<div className="max-w-3xl mx-auto p-6 border-2 border-gray-500 rounded-2xl bg-white my-10">
				<p>
					<span className="font-bold">07. </span>
					Our AI-powered recommendation engine identifies shoppable keywords in your blogs or articles and
					maps them to relevant products from your catalog, delivering unmatched precision.
				</p>

				<div className="max-w-3xl mx-auto p-6 border bg-slate-50 rounded-sm">
					{/* <!-- Recipe Header --> */}
					<header className="text-center mb-8">
						<h2 className="text-2xl font-bold text-purple-600 mb-2">No-Bake Honey Nut Clusters</h2>
						<p className="text-sm text-gray-700">
							Crunchy, sweet, and healthy, these nut clusters do it all. See how to make them!
						</p>
					</header>

					{/* <!-- Yield and Time --> */}
					<div className="flex justify-between items-center mb-6">
						<div className="text-sm text-gray-500">
							<strong>Yield:</strong> 8 clusters
						</div>
						<div className="text-sm text-gray-500">
							<strong>Total Time:</strong> 15 minutes
						</div>
					</div>

					{/* <!-- Ingredients Section --> */}
					<section className="relative">
						<h2 className="text-2xl font-semibold text-purple-600 mb-4">Ingredients</h2>
						<ul className="list-disc pl-5 space-y-2">
							<li>1 cup oats (rolled or quick)</li>
							<li>1/3 cup almonds (chopped)</li>
							<li>1/3 cup cashews (chopped)</li>
							<li>1/4 cup honey</li>
						</ul>
						<span className="hidden md:block absolute -right-28 -top-24">
							<img src="/arrow-white.svg" />
							<span className="absolute font-semibold text-white top-12 -right-32 w-40">
								7. Shoppable keywords powered by ML & AI algorithms
							</span>
						</span>
					</section>
				</div>
			</div>

			<div className="max-w-3xl mx-auto p-6 border-2 border-gray-500 rounded-2xl bg-white my-10">
				<h4 className="text-2xl font-semibold">Connected Intelligence for Smarter Commerce</h4>
				<div className="bg-[#04133a] h-[1px] mt-1 mb-4"></div>
				<table className="w-full my-4 border-separate border-spacing-0 rounded-lg overflow-hidden shadow-lg">
					<thead className="bg-gray-100">
						<tr>
							<th className="text-left text-sm font-semibold text-gray-700 py-3 px-6">Features</th>
							<th className="text-left text-sm font-semibold text-gray-700 py-3 px-6">User Benefits</th>
						</tr>
					</thead>
					<tbody>
						<tr className="bg-white hover:bg-gray-50 transition-colors duration-300">
							<td className="text-left text-sm text-gray-600 py-3 px-6 border border-gray-200">
								Live Sync & Fulfillment
							</td>
							<td className="w-full gap-4 justify-center items-center text-left py-3 px-6 border border-gray-200">
								AI-powered product sync ensures real-time inventory, pricing, and fulfillment directly
								from brands.
							</td>
						</tr>
						<tr className="bg-white hover:bg-gray-50 transition-colors duration-300">
							<td className="text-left text-sm text-gray-600 py-3 px-6 border border-gray-200">
								AI-Powered Cart
							</td>
							<td className="text-left py-3 px-6 border border-gray-200">
								Persistent carts adapt to user behavior, enabling retargeting and optimizing engagement
								across sessions.
							</td>
						</tr>
						<tr className="bg-white hover:bg-gray-50 transition-colors duration-300">
							<td className="text-left text-sm text-gray-600 py-3 px-6 border border-gray-200">
								Flexible AI-Driven Layouts
							</td>
							<td className="inline-flex w-full justify-center text-left py-3 px-6 border border-gray-200">
								Dynamic designs adapt to user context, from subtle links to bold banners, powered by
								lightweight, site-speed-friendly JS.
							</td>
						</tr>
						<tr className="bg-white hover:bg-gray-50 transition-colors duration-300">
							<td className="text-left text-sm text-gray-600 py-3 px-6 border border-gray-200">
								Price Alerts
							</td>
							<td className="text-left py-3 px-6 border border-gray-200">
								Notify users of price drops on products they’ve viewed or added to their cart. Keeps
								users engaged and incentivized to buy when prices drop.
							</td>
						</tr>
						<tr className="bg-white hover:bg-gray-50 transition-colors duration-300">
							<td className="text-left text-sm text-gray-600 py-3 px-6 border border-gray-200">
								Flash Sales
							</td>
							<td className="text-left py-3 px-6 border border-gray-200">
								Run time-sensitive promotions with urgency-inducing UIs like countdown timers and
								banners. Drives urgency and excitement, boosting conversions.
							</td>
						</tr>
						<tr className="bg-white hover:bg-gray-50 transition-colors duration-300">
							<td className="text-left text-sm text-gray-600 py-3 px-6 border border-gray-200">
								Personalized Recommendations
							</td>
							<td className="text-left py-3 px-6 border border-gray-200">
								Tailored product suggestions based on user behavior, cohort, page context, and
								brand-side intelligence. Helps users discover products they’ll love, enhancing
								satisfaction and conversions .
							</td>
						</tr>
						<tr className="bg-white hover:bg-gray-50 transition-colors duration-300">
							<td className="text-left text-sm text-gray-600 py-3 px-6 border border-gray-200">
								Price Alerts
							</td>
							<td className="text-left py-3 px-6 border border-gray-200">
								{' '}
								Notify users of price drops on products they’ve viewed or added to their cart. Keeps
								users engaged and incentivized to buy when prices drop.
							</td>
						</tr>
						<tr className="bg-white hover:bg-gray-50 transition-colors duration-300">
							<td className="text-left text-sm text-gray-600 py-3 px-6 border border-gray-200">
								Coupons & Promotions
							</td>
							<td className="text-left py-3 px-6 border border-gray-200">
								Site-exclusive discounts for specific products, users, or time periods. Enhances loyalty
								and strengthens brand partnerships.
							</td>
						</tr>
						<tr className="bg-white hover:bg-gray-50 transition-colors duration-300">
							<td className="text-left text-sm text-gray-600 py-3 px-6 border border-gray-200">
								Excitement-Driven Elements
							</td>
							<td className="text-left py-3 px-6 border border-gray-200">
								Limited-time deal tags and dynamic visuals. Creates a sense of urgency and fun,
								encouraging impulse buys.
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="max-w-3xl mx-auto p-6 border-2 border-gray-500 rounded-2xl bg-white my-10">
				<h4 className="text-2xl font-semibold text-center sm:text-left">
					The Ultimate Destination for Trusted Discovery & Purchase
				</h4>
				<div className="bg-[#04133a] h-[1px] mt-1 mb-4"></div>
				<div className="overflow-x-auto">
					<table className="table-auto w-full my-4 border-collapse border border-spacing-0 rounded-lg overflow-hidden shadow-lg">
						<thead className="bg-gray-100">
							<tr>
								<th className="text-left text-sm font-semibold text-gray-700 py-3 px-6">Metric</th>
								<th className="text-left text-sm font-semibold text-gray-700 py-3 px-6">
									Traditional Methods
								</th>
								<th className="text-left text-sm font-semibold text-gray-700 py-3 px-6">With Dpanda</th>
							</tr>
						</thead>
						<tbody>
							<tr className="bg-white hover:bg-gray-50 transition-colors duration-300">
								<td className="text-left text-sm text-gray-600 py-3 px-6 border border-gray-200">
									User Engagement
								</td>
								<td className="text-sm text-gray-600 py-3 px-6 border border-gray-200">
									Limited personalization and static designs
								</td>
								<td className="text-sm text-gray-600 py-3 px-6 border border-gray-200">
									AI-driven personalization with intelligent layouts optimized for discovery and
									purchase.
								</td>
							</tr>
							<tr className="bg-white hover:bg-gray-50 transition-colors duration-300">
								<td className="text-left text-sm text-gray-600 py-3 px-6 border border-gray-200">
									Conversion Rates
								</td>
								<td className="text-sm text-gray-600 py-3 px-6 border border-gray-200">
									Relies on generic discounts or limited campaigns
								</td>
								<td className="text-sm text-gray-600 py-3 px-6 border border-gray-200">
									Targeted features like Price Alerts, Flash Sales, and Recommendations boost
									conversions.
								</td>
							</tr>
							<tr className="bg-white hover:bg-gray-50 transition-colors duration-300">
								<td className="text-left text-sm text-gray-600 py-3 px-6 border border-gray-200">
									Revenue Potential
								</td>
								<td className="text-sm text-gray-600 py-3 px-6 border border-gray-200">
									Missed opportunities with static monetization
								</td>
								<td className="text-sm text-gray-600 py-3 px-6 border border-gray-200">
									Unlock higher revenue through multi-brand checkout, exclusive site promotions, and
									maximized ROI.
								</td>
							</tr>
							<tr className="bg-white hover:bg-gray-50 transition-colors duration-300">
								<td className="text-left text-sm text-gray-600 py-3 px-6 border border-gray-200">
									Operational Effort
								</td>
								<td className="text-sm text-gray-600 py-3 px-6 border border-gray-200">
									High manual effort for integration and updates
								</td>
								<td className="text-sm text-gray-600 py-3 px-6 border border-gray-200">
									Seamless integration with automated updates and AI-powered insights.
								</td>
							</tr>
							<tr className="bg-white hover:bg-gray-50 transition-colors duration-300">
								<td className="text-left text-sm text-gray-600 py-3 px-6 border border-gray-200">
									Brand Partnerships
								</td>
								<td className="text-sm text-gray-600 py-3 px-6 border border-gray-200">
									Limited collaboration opportunities
								</td>
								<td className="text-sm text-gray-600 py-3 px-6 border border-gray-200">
									Stronger relationships through exclusive launches and tailored promotions with
									real-time fulfillment.
								</td>
							</tr>
							<tr className="bg-white hover:bg-gray-50 transition-colors duration-300">
								<td className="text-left text-sm text-gray-600 py-3 px-6 border border-gray-200">
									Content Monetization
								</td>
								<td className="text-sm text-gray-600 py-3 px-6 border border-gray-200">
									Limited to static ads or links
								</td>
								<td className="text-sm text-gray-600 py-3 px-6 border border-gray-200">
									Turns banners, reviews, and content into intuitive, shoppable experiences with
									seamless eCommerce.
								</td>
							</tr>
							<tr className="bg-white hover:bg-gray-50 transition-colors duration-300">
								<td className="text-left text-sm text-gray-600 py-3 px-6 border border-gray-200">
									Customer Retention
								</td>
								<td className="text-sm text-gray-600 py-3 px-6 border border-gray-200">
									Users drop off after completing isolated actions
								</td>
								<td className="text-sm text-gray-600 py-3 px-6 border border-gray-200">
									Persistent carts, price alerts, and exclusive offers encourage loyalty and repeat
									engagement.
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<div className="max-w-3xl mx-auto p-6 border-2 border-gray-500 rounded-2xl bg-white my-10">
				<h4 className="text-2xl font-semibold">Widget Integration Summary</h4>
				<div className="bg-[#04133a] h-[1px] mt-1 mb-4"></div>
				<WidgetSummaryTable />
			</div>
		</div>
	);
};

export default WidgetTab;
