"use client";
import Script from "next/script";
import { useParams } from "next/navigation";
import Navbar from "@/app/roi-calculator/Components/Navbar";
import PreviewTabs from "../Components/TabSection/PreviewTabs";
import { getWidgetUrl } from "@/app/Data/publishers";

const Page = () => {
  const params = useParams();
  const publisher = params?.publisherId?.[0];
  const siteUrl = getWidgetUrl(publisher)?.url;
  return (
    <>
      <Navbar />
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
                  console.log('Fetched data:', data);
                  
                  const productsForPage = data[currentPageUrl];
                  console.log('Products for page:', productsForPage);
                  
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
          <PreviewTabs />
        </div>
      </main>
    </>
  );
};

export default Page;
