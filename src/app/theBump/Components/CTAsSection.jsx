'use client';
const CTAsSection = () => {
  const groupPurchase = () => {
    document.getElementById('dpw-recipe-btn').click();
  };
  const togglePDP = () => {
    window.DPWidget.togglePDP();
  };
  const toggleProductsSheet = () => {
    window.DPWidget.toggleProductList();
  };
  const toggleCategory = () => {
    window.DPWidget.toggleCategoryModal();
  };
  return (
    <>
      <div className="relative">
        <img
          onClick={toggleProductsSheet}
          className="cursor-pointer"
          src="https://publisher-banner.dpanda.in/1726056945_Belavita.png"
          alt="bellavita-banner"
        />
        <span className="hidden md:block absolute -left-24 top-16">
          <img src="https://imagekit.dpanda.in/publisher-banner/1731332697_arrow2.png" />
          <span className="absolute font-semibold -top-10 -left-20 w-40">
            3. Targetted Banners
          </span>
        </span>
      </div>
      <div className="banner-buttons flex gap-4 mt-8 flex-wrap">
        <button
          onClick={togglePDP}
          className="bg-blue-500 text-white py-2 px-6 rounded-md cursor-pointer flex-1"
        >
          Product PDP
        </button>
        <button
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
        </button>
      </div>

      {/* Group Purchase Section */}
      <div className="section mt-8" id="group-purchase">
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

        {/* <p className="mt-4 text-center">3.2: Group Purchase</p> */}
      </div>
    </>
  );
};

export default CTAsSection;
