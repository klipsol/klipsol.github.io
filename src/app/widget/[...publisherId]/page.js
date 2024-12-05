"use client";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/app/roi-calculator/Components/Navbar";
import PreviewTabs from "../Components/TabSection/PreviewTabs";
import { getWidgetUrl } from "@/app/Data/publishers";

const Page = () => {
  const params = useParams();
  const publisher = params?.publisherId?.[0];
  const siteUrl = getWidgetUrl(publisher)?.url;

  useEffect(() => {
    // Function to load external script
    const loadExternalScript = (src, id) => {
      return new Promise((resolve, reject) => {
        // Remove existing script if it exists
        const existingScript = document.getElementById(id);
        if (existingScript) {
          existingScript.remove();
        }

        const script = document.createElement("script");
        script.src = src;
        script.id = id;
        script.async = true;

        script.onload = () => resolve(script);
        script.onerror = () =>
          reject(new Error(`Script load error for ${src}`));

        document.body.appendChild(script);
      });
    };

    // Function to load inline script
    const loadInlineScript = () => {
      const inlineScript = document.createElement("script");
      inlineScript.id = "dpanda-widget-inline";
      inlineScript.innerHTML = `
        (async () => {
          // Your existing inline script logic here
          const fetchProductsOnPagePerWidget = async () => {
            try {
              const url = 'https://brand-images-dpanda.s3.ap-south-1.amazonaws.com/widget/shop_dpanda_in.json';
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
          
          // Rest of your existing inline script logic for replacing product names, etc.
          const initDPWidget = async () => {
            try {
              const productsArray = await fetchProductsOnPagePerWidget();
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

          // Call initDPWidget when script loads
          initDPWidget();
        })();
      `;

      document.body.appendChild(inlineScript);
    };

    // Load scripts
    const loadScripts = async () => {
      try {
        // First load the external widget script
        await loadExternalScript(`${siteUrl}/widget.js`, "dpanda-widget");

        // Then load the inline script
        loadInlineScript();
      } catch (error) {
        console.error("Error loading scripts:", error);
      }
    };

    // Call load scripts
    loadScripts();

    // Cleanup function
    return () => {
      const externalScript = document.getElementById("dpanda-widget");
      const inlineScript = document.getElementById("dpanda-widget-inline");

      if (externalScript) externalScript.remove();
      if (inlineScript) inlineScript.remove();
    };
  }, [siteUrl]); // Depend on siteUrl to reload if it changes

  return (
    <>
      <Navbar />
      <main className="bg-[#09133A] text-white pb-10">
        <div>
          <PreviewTabs />
        </div>
      </main>
    </>
  );
};

export default Page;
