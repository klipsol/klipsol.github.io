"use client";
import { getWidgetUrl } from "@/app/Data/publishers";
import Navbar from "@/app/roi-calculator/Components/Navbar";
import { useParams } from "next/navigation";
import Script from "next/script";
import Footer from "@/app/the-bump/Components/Footer/Footer";

const Page = () => {
  const params = useParams();

  const publisher = params?.publisherId?.[0];
  console.log("Publisher:", publisher);
  const siteUrl = getWidgetUrl("dpanda")?.url;
  return (
    <>
      <Navbar customBg={null} />
      <main className="bg-[#09133A] text-white pb-10">
        <Script id="" strategy="afterInteractive">
          {`
            (async () => {
              // Fetch the product text on the page from the server
              const fetchProductsOnPagePerWidget = async () => {
                try {
                  const url = \`https://brand-images-dpanda.s3.ap-south-1.amazonaws.com/widget/shop_dpanda_in.json\`;
                  const currentPageUrl = 'https://thrivemarket.dpanda-buy-widget.pages.dev';
                  console.log('Fetching products for URL:', currentPageUrl);
                  
                  const response = await fetch(url);
                  const data = await response.json();
                  
                  const productsForPage = data[currentPageUrl];
                  
                  return productsForPage || { inline: {}, dynamic: [] };
                } catch (error) {
                  console.error('Error fetching products:', error);
                  return { inline: {}, dynamic: [] };
                }
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
                try {
                  const productsArray = await fetchProductsOnPagePerWidget();
                  console.log('Processing products:', productsArray);
                  
                  // Ensure inline exists and is an object before calling entries
                  if (productsArray.inline && typeof productsArray.inline === 'object') {
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
                  } else {
                    console.warn('No inline products found');
                  }
                  
                  return productsArray;
                } catch (error) {
                  console.error('Error replacing product names:', error);
                  return { inline: {}, dynamic: [] };
                }
              };
          
              // Initialize the widget
              const initDPWidget = async () => {
                try {
                  const productsArray = await replaceProductNamesWithWidgetPlaceholders();
                  const productIdsArr = productsArray?.dynamic || []        
                  if (typeof DPWidget === 'object' && typeof DPWidget.render === 'function') {
                    DPWidget.render({
                      categoryToggle: true,
                      productIds: productIdsArr || undefined,
                      cartToggleType: "floating",
                      cartType: "bottomsheet",
                      key: 'VTZIajBSKzVQTnJ4dTZMOUV4bmJKdz09',
                    });
                  } else {
                    console.warn('DPWidget not found or render method missing');
                  }
                } catch (error) {
                  console.error('Error initializing widget:', error);
                }
              };
          
              // Load the widget script
              (function (d, s, id) {
                const js = d.createElement(s);
                const fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) { return; }
                js.id = id;
                js.src =  '${siteUrl}/widget.js';
                fjs.parentNode.insertBefore(js, fjs);
          
                // Add the 'onload' event listener to the script element
                js.onload = initDPWidget;
              }(document, 'script', 'dpanda-widget'));
            })()
          `}
        </Script>
        <div>
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
                data-dpa-widget-page-name="thankyou"
              ></span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Page;
