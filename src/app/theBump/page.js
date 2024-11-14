import Script from 'next/script';
import CTAsSection from './Components/CTAsSection';
import FloatingCallout from './Components/FloatingCallout';
import WidgetSummaryTable from './Components/WidgetSummaryTable';

const Page = () => {
  return (
    <>
      <div className="bg-[#fdfcfa] text-black">
        {/* <Script id="theBump-widget" strategy="afterInteractive">
          {`(function (d, s, id) {
             const js = d.createElement(s);
             const fjs = d.getElementsByTagName(s)[0];
             if (d.getElementById(id)) { return; }
             js.id = id;
             js.src = "https://the-bump.dpanda-buy-widget.pages.dev/widget.js";
             fjs.parentNode.insertBefore(js, fjs);
   
             js.onload = function () {
             if (typeof DPWidget !== 'undefined') {
                 DPWidget.render({key: "VkxHbFJoa2lQVmIvdjRaRjgrQ25LZz09"});
             } else {
                 console.error('DPWidget is not available.');
             }
             };
         }(document, 'script', 'dpanda-widget'));`}
        </Script> */}
        <Script id="" strategy="afterInteractive">
          {`
            (async () => {
              // Fetch the product text on the page from the server
              const fetchProductsOnPagePerWidget = async () => {
                const url = \`https://brand-images-dpanda.s3.ap-south-1.amazonaws.com/widget/shop_dpanda_in.json\`;
                const currentPageUrl = 'https://thrivemarket.dpanda-buy-widget.pages.dev';
                const response = await fetch(url);
                const data = await response.json();
                return data[currentPageUrl] || [];
              };
          
              // Recursive function to find text nodes
              const findTextNodes = (element, callback) => {
                for (let child of element.childNodes) {
                  if (child.nodeType === 3) { // 3 is a text node
                    callback(child);
                  } else {
                    findTextNodes(child, callback);
                  }
                }
              };
          
              // Replace a text node with a span element
              const wrapWithSpan = (node, product, product_id) => {
                const regex = new RegExp(product, 'g');
                const newText = node.textContent.replace(regex, match => {
                  const span = document.createElement('span');
                  span.setAttribute('dpw-commerce', '');
                  span.classList.add('dpwc-pf-sty');
                  span.setAttribute('data-dpa-widget-type', 'product');
                  span.setAttribute('data-dpa-widget-theme', 'product-link');
                  span.setAttribute('data-dpa-product-id', product_id);
                  span.setAttribute('data-dpa-element-text', match);
                  return span.outerHTML;
                });
                const temp = document.createElement('div');
                temp.innerHTML = newText;
                node.replaceWith(...temp.childNodes);
              };
          
              // Replace an anchor tag with a span element
              const replaceAnchorWithSpan = (node, product, product_id) => {
                const regex = new RegExp(product, 'g');
                const textAfterProduct = node.textContent.replace(regex, '');
          
                const span = document.createElement('span');
                span.setAttribute('dpw-commerce', '');
                span.classList.add('dpwc-pf-sty');
                span.setAttribute('data-dpa-widget-type', 'product');
                span.setAttribute('data-dpa-widget-theme', 'product-link');
                span.setAttribute('data-dpa-product-id', product_id);
                span.setAttribute('data-dpa-element-text', product + textAfterProduct);
          
                node.replaceWith(span);
              };
          
              // Replace product names with widget placeholders
              const replaceProductNamesWithWidgetPlaceholders = async () => {
                const productsArray = await fetchProductsOnPagePerWidget();
                Object.entries(productsArray.inline).forEach(([ key, value ]) => {
                  const regex = new RegExp(key, 'g');
                  findTextNodes(document.body, (node) => {
                    const parent = node.parentNode;
          
                    if (regex.test(node.textContent)) {
                      if (parent.tagName === 'A') {
                        replaceAnchorWithSpan(parent, key, value[0]);
                      } else {
                        wrapWithSpan(node, key, value[0]);
                      }
                    }
                  });
                });
                return productsArray;
              };
          
              // Initialize the widget
              const initDPWidget = async () => {
                const productsArray = await replaceProductNamesWithWidgetPlaceholders();
                const productIdsArr = productsArray?.dynamic || []        
                if (typeof DPWidget === 'object' && typeof DPWidget.render === 'function') {
                  DPWidget.render({
                    categoryToggle: true,
                    productIds: productIdsArr || undefined,
                    cartToggleType: "floating",
                    cartType: "bottomsheet",
                    key: 'VkxHbFJoa2lQVmIvdjRaRjgrQ25LZz09',
                  });
                }
              };
          
              // Load the widget script
              (function (d, s, id) {
                const js = d.createElement(s);
                const fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) { return; }
                js.id = id;
                js.src = "https://the-bump.dpanda-buy-widget.pages.dev/widget.js";
                fjs.parentNode.insertBefore(js, fjs);
          
                // Add the 'onload' event listener to the script element
                js.onload = initDPWidget;
              }(document, 'script', 'dpanda-widget'));
            })()
          `}
        </Script>
        <div>
          {/* Header Section */}
          <header className="bg-[#fdfcfa] shadow-md">
            <div className="max-w-screen-xl mx-auto p-5">
              <img
                src="https://imagekit.dpanda.in/publisher-banner/1730186061_logo1.png"
                alt="Dpanda Logo"
                className="w-32"
              />
            </div>
          </header>

          {/* Main Content Section */}
          {/* <h1 className="text-center text-lg mt-10">
            Click To Experience Yourself
          </h1> */}

          <div className="max-w-3xl mx-auto p-6 border-2 border-gray-500 rounded-2xl my-10">
            <div className="content">
              <h4 className="text-2xl font-semibold">
                Below Are Some Examples of CTAs and User Journeys
              </h4>
              <div className="bg-[#04133a] h-[1px] mt-1 mb-4"></div>
              <div>
                <p>
                  1. We can attach a simple “Buy Now” button against any product
                  review.{' '}
                </p>
                <span
                  className="relative flex justify-start mt-2"
                  dpw-commerce="true"
                  data-dpa-widget-type="product"
                  data-dpa-widget-theme="91mobiles"
                  data-dpa-product-id="300082"
                >
                  <span className="hidden md:block absolute -left-24 top-0">
                    <img src="https://imagekit.dpanda.in/publisher-banner/1731332697_arrow2.png" />
                    <span className="absolute font-semibold -top-8 -left-20 w-40">
                      1. Buy Now
                    </span>
                  </span>
                </span>
              </div>
              <p className="mt-4">
                2. We can insert a carousel of products anywhere on the page.
                This can be scrolled left to right.
              </p>
              <div className="p-2 relative">
                <span className="hidden md:block absolute -left-24 top-16">
                  <img src="https://imagekit.dpanda.in/publisher-banner/1731332697_arrow2.png" />
                  <span className="absolute font-semibold -top-8 -left-20 w-36">
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

              <CTAsSection />

              {/* Floating CTA */}
              <p className="mt-8">
                4. Our widget is designed to take up minimum possible space as
                required. You can add a floating icon as your CTA. You can even
                hyperlink shoppable texts as done below: <br />
                <span
                  className="relative"
                  dpw-commerce="true"
                  data-dpa-widget-type="product"
                  data-dpa-widget-theme="product-link"
                  data-dpa-product-id="300082"
                  data-dpa-element-text="custom text"
                >
                  <span className="hidden md:block absolute -left-24 top-3">
                    <img src="https://imagekit.dpanda.in/publisher-banner/1731332697_arrow2.png" />
                    <span className="absolute font-semibold -top-8 -left-20 w-40">
                      4. Text based CTA
                    </span>
                  </span>
                </span>
              </p>

              <p className="mt-4">
                5. We can add callouts above the fold after a certain depth
              </p>
              <FloatingCallout />

              <p className="mt-4">
                6. We can also add an entire shopping website inside - as you
                can see using the shop CTA.
              </p>
              <p className="my-4 relative w-fit">
                <a
                  href="https://myfitness.dpanda.online/"
                  target="_blank"
                  className="bg-blue-500 text-white rounded-md p-2 hover:underline"
                >
                  Shop
                </a>
                <span className="hidden md:block absolute -left-24 top-0">
                  <img src="https://imagekit.dpanda.in/publisher-banner/1731332697_arrow2.png" />
                  <span className="absolute font-semibold -top-12 -left-[72px] w-40">
                    6. Dedicated microsite for you
                  </span>
                </span>
              </p>

              <p>
                7. We have built an intelligent system that leverages ML & AI to
                scrape and find shoppable keywords within your blogs/articles
                and map products to each keyword from the catalogue. The end
                result looks as follows.
              </p>

              <div className="max-w-3xl mx-auto p-6 border bg-slate-50">
                {/* <!-- Recipe Header --> */}
                <header className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-purple-600 mb-2">
                    Crunchy Spiderweb Treats
                  </h2>
                  <p className="text-sm text-gray-700">
                    Crunchy, sweet, and salty, these spiderwebs do it all. See
                    how to make them!
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
                  <span className="hidden md:block absolute -left-28 top-24">
                    <img src="https://imagekit.dpanda.in/publisher-banner/1731332697_arrow2.png" />
                    <span className="absolute font-semibold -top-12 -left-24 w-40">
                      7. Shoppable keywords powered by ML & AI algorithms
                    </span>
                  </span>
                </section>
              </div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto p-6 border-2 border-gray-500 rounded-2xl my-10">
            <h3 className="text-2xl font-semibold">
              Dpanda Widget Key Features:
            </h3>
            <div className="bg-[#04133a] h-[1px] mt-1 mb-4"></div>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Live Product Sync: Inventory, pricing, and images are synced
                directly from brands, ensuring real-time accuracy. Orders are
                fulfilled by brands, enhancing authenticity and trust.
              </li>
              <li>
                Persistent Cart: Users can browse freely without losing their
                cart across sessions. You can thus retarget them in the same
                session or during repeat visits.
              </li>
              <li>
                Flexible Tech: Adaptable layouts, from subtle links to bold
                banners in prime site positions. A lightweight JS code ensures
                no impact on site speed or metrics.
              </li>
            </ul>

            <h3 className="mt-8 text-2xl font-semibold">
              A Step Change in Your Monetization Strategy
            </h3>
            <div className="bg-[#04133a] h-[1px] mt-1 mb-4"></div>

            <p className="mt-4 leading-relaxed">
              Dpanda embeds multi-brand checkout within your site, delivering
              better user experiences, full control over first-party data, and
              higher monetization. This drives unmatched personalization and
              increases customer lifetime value while making traditional
              monetization models obsolete.
            </p>
            <p className="mt-4 leading-relaxed">
              Trusted by 1,500+ brands and 20 publishers reaching over 200
              million users, Dpanda provides all the technology and operational
              support needed for seamless integration.
            </p>
          </div>
          <div className="max-w-3xl mx-auto p-6 border-2 border-gray-500 rounded-2xl my-10">
            <h4 className="text-2xl font-semibold">
              Widget Integration Summary
            </h4>
            <div className="bg-[#04133a] h-[1px] mt-1 mb-4"></div>
            <WidgetSummaryTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
