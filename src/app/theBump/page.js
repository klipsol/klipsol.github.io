import Script from 'next/script';
import PreviewTabs from './Components/TabSection/PreviewTabs';

const Page = () => {
  return (
    <main className="bg-[#09133A] text-white pb-10">
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
        <PreviewTabs />
      </div>
    </main>
  );
};

export default Page;
