'use client';
const WidgetSummaryTable = () => {
	const togglePDP = () => {
		window.DPWidget.togglePDP('144359');
	};
	const toggleProductsSheet = () => {
		window.DPWidget.toggleProductList();
	};
	const toggleCategory = () => {
		window.DPWidget.toggleCategoryModal();
	};

	return (
		<table className="w-full my-4 border-separate border-spacing-0 rounded-lg overflow-hidden shadow-lg">
			<thead className="bg-gray-100">
				<tr>
					<th className="text-center text-sm font-semibold text-gray-700 py-3 px-6">Type</th>
					<th className="text-center text-sm font-semibold text-gray-700 py-3 px-6">
						CTA Outcomes <p className="text-[11px]">(*customisable to your needs)</p>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr className="bg-white hover:bg-gray-50 transition-colors duration-300">
					<td className="text-center text-sm text-gray-600 py-3 px-6 border-t border-gray-200">
						Product PDP
					</td>
					<td className="w-full gap-4 justify-center items-center text-center py-3 px-6 border-t border-gray-200">
						<button
							onClick={togglePDP}
							className="bg-[#af19a3] w-fit font-medium rounded-md text-sm text-white py-2 px-6 cursor-pointer flex-1 hover:bg-[#9d1789] transition-colors"
						>
							Product PDP
						</button>
						{/* <span
              dpw-commerce="true"
              data-dpa-widget-type="product"
              data-dpa-widget-theme="flip"
              data-dpa-product-id="300082"
            ></span>
            <span
              className="-mt-0.5"
              dpw-commerce="true"
              data-dpa-widget-type="product"
              data-dpa-widget-theme="product-link"
              data-dpa-product-id="300082"
            ></span> */}
					</td>
				</tr>
				<tr className="bg-white hover:bg-gray-50 transition-colors duration-300">
					<td className="text-center text-sm text-gray-600 py-3 px-6 border-t border-gray-200">
						Selected Product Ids
					</td>
					<td className="text-center py-3 px-6 border-t border-gray-200">
						<button
							onClick={toggleProductsSheet}
							className="bg-[#af19a3] font-medium rounded-md text-sm text-white py-2 px-6 cursor-pointer hover:bg-[#9d1789] transition-colors"
						>
							Shop Now
						</button>
					</td>
				</tr>
				<tr className="bg-white hover:bg-gray-50 transition-colors duration-300">
					<td className="text-center text-sm text-gray-600 py-3 px-6 border-t border-gray-200">
						Group/Recipe Purchase
					</td>
					<td className="inline-flex w-full justify-center text-center py-3 px-6 border-t border-gray-200">
						<div
							className="w-fit"
							dpw-commerce="true"
							data-dpa-widget-type="product"
							data-dpa-widget-theme="recipe"
							data-dpa-product-id="300082,300081"
						></div>
					</td>
				</tr>
				<tr className="bg-white hover:bg-gray-50 transition-colors duration-300">
					<td className="text-center text-sm text-gray-600 py-3 px-6 border-t border-gray-200">
						Category Modal
					</td>
					<td className="text-center py-3 px-6 border-t border-gray-200">
						<button
							onClick={toggleCategory}
							className="bg-[#af19a3] font-medium rounded-md text-sm text-white py-2 px-6 cursor-pointer hover:bg-[#9d1789] transition-colors"
						>
							Shop Now
						</button>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default WidgetSummaryTable;
