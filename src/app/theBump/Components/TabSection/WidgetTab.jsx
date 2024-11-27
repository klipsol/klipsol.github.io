import CTAsSection from '../CTAsSection';
import FloatingCallout from '../FloatingCallout';
import WidgetSummaryTable from '../WidgetSummaryTable';

const WidgetTab = ({ selectedTab }) => {
  return (
    <div className="text-black">
      <h4 className="text-2xl font-semibold text-white w-fit m-auto pt-4">
        Below Are Some Examples of CTAs and User Journeys
        <div className="bg-white h-[1px] mt-1 mb-4"></div>
      </h4>
      <div className="max-w-3xl mx-auto p-6 border-2 border-gray-500 rounded-2xl bg-white my-10">
        <div>
          <p>
            <span className="font-bold">01. </span>
            We can attach a simple “Buy Now” button against any product review.{' '}
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
              <span className="absolute font-semibold text-white top-12 -right-32 w-40">
                1. Buy Now
              </span>
            </span>
          </span>
        </div>
      </div>
      <div className="max-w-3xl mx-auto p-6 border-2 border-gray-500 rounded-2xl bg-white my-10">
        <p className="">
          <span className="font-bold">02. </span>
          We can insert a carousel of products anywhere on the page. This can be
          scrolled left to right.
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
          Our widget is designed to take up minimum possible space as required.
          You can add a floating icon as your CTA. You can even hyperlink
          shoppable texts as done below: <br />
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
          We can add callouts above the fold after a certain depth
        </p>
        <FloatingCallout />
      </div>
      <div className="max-w-3xl mx-auto p-6 border-2 border-gray-500 rounded-2xl bg-white my-10">
        <p className="">
          <span className="font-bold">06. </span>
          We can also add an entire shopping website inside - as you can see
          using the shop CTA.
        </p>
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
      <div className="max-w-3xl mx-auto p-6 border-2 border-gray-500 rounded-2xl bg-white my-10">
        <p>
          <span className="font-bold">07. </span>
          We have built an intelligent system that leverages ML & AI to scrape
          and find shoppable keywords within your blogs/articles and map
          products to each keyword from the catalogue. The end result looks as
          follows.
        </p>

        <div className="max-w-3xl mx-auto p-6 border bg-slate-50 rounded-sm">
          {/* <!-- Recipe Header --> */}
          <header className="text-center mb-8">
            <h2 className="text-2xl font-bold text-purple-600 mb-2">
              Crunchy Spiderweb Treats
            </h2>
            <p className="text-sm text-gray-700">
              Crunchy, sweet, and salty, these spiderwebs do it all. See how to
              make them!
            </p>
          </header>

          {/* <!-- Yield and Time --> */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-sm text-gray-500">
              <strong>Yield:</strong> 4 spiderwebs
            </div>
            <div className="text-sm text-gray-500">
              <strong>Total Time:</strong> 30 minutes
            </div>
          </div>

          {/* <!-- Ingredients Section --> */}
          <section className="relative">
            <h2 className="text-2xl font-semibold text-purple-600 mb-4">
              Ingredients
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>32 pretzel sticks</li>
              <li>1 cup white chocolate chips</li>
              <li>1-2 lollipops or sprinkles (optional)</li>
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
        <h3 className="text-2xl font-semibold">Dpanda Widget Key Features:</h3>
        <div className="bg-[#04133a] h-[1px] mt-1 mb-4"></div>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <b>Live Product Sync:</b> Inventory, pricing, and images are synced
            directly from brands, ensuring real-time accuracy. Orders are
            fulfilled by brands, enhancing authenticity and trust.
          </li>
          <li>
            <b>Persistent Cart:</b> Users can browse freely without losing their
            cart across sessions. You can thus retarget them in the same session
            or during repeat visits.
          </li>
          <li>
            <b>Flexible Tech:</b> Adaptable layouts, from subtle links to bold
            banners in prime site positions. A lightweight JS code ensures no
            impact on site speed or metrics.
          </li>
        </ul>

        <h3 className="mt-8 text-2xl font-semibold">
          A Step Change in Your Monetization Strategy
        </h3>
        <div className="bg-[#04133a] h-[1px] mt-1 mb-4"></div>

        <p className="mt-4 leading-relaxed">
          Dpanda embeds multi-brand checkout within your site, delivering better
          user experiences, full control over first-party data, and higher
          monetization. This drives unmatched personalization and increases
          customer lifetime value while making traditional monetization models
          obsolete.
        </p>
        <p className="mt-4 leading-relaxed">
          Trusted by 1,500+ brands and 20 publishers reaching over 200 million
          users, Dpanda provides all the technology and operational support
          needed for seamless integration.
        </p>
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
