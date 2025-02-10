const AdEngineWidgetTab = ({ selectedTab }) => {
  return (
    <div className="text-black">
      <h4 className="text-2xl font-semibold text-white w-fit m-auto pt-4">
        Interactive Demo: Post Checkout Ad Engine
        <div className="bg-white h-[1px] mt-1 mb-4"></div>
      </h4>
      <p className="text-base text-white w-fit m-auto">
        Drive conversion post checkout with our ad engine widget.
      </p>
      <div className="max-w-3xl mx-auto p-6 border-2 border-gray-500 rounded-2xl bg-white my-10">
        <div>
          <p>
            <span className="font-bold">01. Scratch/Reveal Cards</span>
          </p>
          <p>
            Engage customers with a gamified experience by offering instant
            rewards or exclusive discounts through interactive scratch cards
            post-purchase.
          </p>
          <span
            className="dpanda-ad dpanda-product dpandacommerce-catalog-widget dpwc-pf-sty"
            dpw-commerce=""
            data-dpa-widget-type="dpw_ad_engine"
            data-dpa-widget-theme="coupons"
          ></span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-6 border-2 border-gray-500 rounded-2xl bg-white my-10">
        <div>
          <p>
            <span className="font-bold">02. Affiliate Banners</span>
          </p>
          <p>
            Drive additional revenue by displaying targeted affiliate offers on
            the post-checkout page, giving customers access to relevant products
            or services.
          </p>
          <span
            className="dpanda-ad dpanda-product dpandacommerce-catalog-widget dpwc-pf-sty"
            dpw-commerce=""
            data-dpa-widget-type="dpw_ad_engine"
            data-dpa-widget-theme="banners"
          ></span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-6 border-2 border-gray-500 rounded-2xl bg-white my-10">
        <div>
          <p>
            <span className="font-bold">03. Affiliate Products</span>
          </p>
          <p>
            Boost cross-selling by showcasing personalized product
            recommendations directly after checkout, encouraging customers to
            explore more of your offerings.
          </p>
          <span
            className="dpanda-ad dpanda-product dpandacommerce-catalog-widget dpwc-pf-sty"
            dpw-commerce=""
            data-dpa-widget-type="dpw_ad_engine"
            data-dpa-widget-theme="products"
          ></span>
        </div>
      </div>
    </div>
  );
};

export default AdEngineWidgetTab;
