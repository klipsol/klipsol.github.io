"use client";
const CTAsSection = () => {
  const groupPurchase = () => {
    document.getElementById("dpw-recipe-btn").click();
  };
  const togglePDP = () => {
    window.DPWidget.togglePDP("201415");
  };
  const toggleProductsSheet = () => {
    const event = new CustomEvent("openProductListModalEvent", {
      detail: {
        productIds: "307029,307036,307037,327699,329701",
        productName: "Example Product",
        additionalInfo: "Some extra data",
      },
    });
    window.dispatchEvent(event);
  };
  const toggleCategory = () => {
    window.DPWidget.toggleCategoryModal();
  };
  return (
    <>
      <div className="relative">
        <p className="mb-6">
          <span className="font-bold">03. </span>
          Banner clicks dynamically trigger AI-powered widget variations,
          tailored to user behavior and context.
        </p>
        <p className="my-2">3.1: Category or Collection of Products</p>
        <img
          onClick={toggleProductsSheet}
          className="cursor-pointer"
          src="https://publisher-banner.dpanda.in/1726056945_Belavita.png"
          alt="bellavita-banner"
        />
        <span className="hidden md:block absolute -right-20 top-16">
          <img src="/arrow-white.svg" />
          <span className="absolute font-semibold text-white top-12 -right-32 w-40">
            3. Targeted Banners
          </span>
        </span>
      </div>
      <div className="banner-buttons flex gap-4 mt-8">
        {/* <button
					onClick={togglePDP}
					className="bg-blue-500 text-white py-2 px-6 rounded-md cursor-pointer flex-1"
				>
					Product PDP
				</button> */}
        <div className="w-[32%]">
          <p className="mb-2">3.2: Product PDP</p>
          <img
            onClick={togglePDP}
            className="cursor-pointer"
            src="/Artboard_Puresense.png"
            alt="puresense-banner"
          />
        </div>
        <div className="w-[32%]">
          <p className="mb-2">3.3: Category List</p>
          <img
            onClick={toggleCategory}
            className="cursor-pointer"
            src="/Artboard_Sanfe.png"
            alt="sanfe-banner"
          />
        </div>
        <div className="w-[32%]">
          <p className="mb-2">3.4: Group Purchase</p>
          <img
            onClick={groupPurchase}
            className="cursor-pointer"
            src="/Artboard_ChemistAtPlay.png"
            alt="chemistatplay-banner"
          />
        </div>
        {/* <button
					onClick={toggleProductsSheet}
					className="bg-blue-500 text-white py-2 px-6 rounded-md cursor-pointer flex-1"
				>
					Category
				</button>
				<button
					onClick={toggleCategory}
					className="bg-blue-500 text-white py-2 px-6 rounded-md cursor-pointer flex-1"
				>
					Category Hierarchy
				</button> */}
      </div>

      <div className="mt-4">
        <p className="mb-2">3.5: Brands Toggle</p>
        <div
          className="dpanda-ad dpanda-product dpandacommerce-catalog-widget dpwc-pf-sty"
          data-dpa-layout="imagesWithLabels"
          data-dpa-widget-type="brands"
          data-dpa-widget-theme="theme1"
          dpw-commerce=""
        ></div>
      </div>

      {/* Group Purchase Section */}
      {/* <div className="section mt-8" id="group-purchase">
				<button
					onClick={groupPurchase}
					className="bg-blue-500 text-white py-2 px-16 rounded-md cursor-pointer block mx-auto"
				>
					Group Purchase
				</button>
				<div
					className="hidden"
					dpw-commerce="true"
					data-dpa-widget-type="product"
					data-dpa-widget-theme="recipe"
					data-dpa-product-id="300082,300081"
				></div>

				<p className="mt-4 text-center">3.2: Group Purchase</p>
			</div> */}
    </>
  );
};

export default CTAsSection;
