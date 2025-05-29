"use client";

import { useEffect } from "react";

const DPandaWidget = () => {
  const publisher_eid = "M1BSMnV2SlViWWZzK2Y3R0s0VkxMdz09";
  const page_name = "thankyou";

  const getOfferDetails = async () => {
    try {
      const req = await fetch(
        "https://app.dpanda.in/index.php?route=api/ads_engine/widgets/meta",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            publisher_eid: publisher_eid,
            page_name: page_name,
          }),
        }
      );
      const ress = await req.json();

      if (!ress.status) {
        throw new Error("Api Failed!!");
      }
      return ress.response || [];
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const createAdSpan = (widgetType = "", index = null) => {
    const adSpan = document.createElement("span");
    adSpan.className =
      "dpanda-ad dpanda-product dpandacommerce-catalog-widget dpwc-pf-sty";
    adSpan.setAttribute("dpw-commerce", "true");
    adSpan.setAttribute("data-dpa-widget-type", "dpw_ad_engine");
    adSpan.setAttribute("data-dpa-widget-theme", widgetType);
    adSpan.setAttribute("data-dpa-widget-page-name", page_name);
    return adSpan;
  };

  const replaceDpandaWidgetPlaceholders = async () => {
    const widgetData = await getOfferDetails();

    document.querySelectorAll('[dpanda-widget="true"]').forEach((element) => {
      const groupedWidgets = widgetData.reduce((acc, widget) => {
        if (!acc[widget.widget_render_identifier]) {
          acc[widget.widget_render_identifier] = [];
        }
        acc[widget.widget_render_identifier].push(widget);
        return acc;
      }, {});

      const element_identifier = element.getAttribute("identifier");

      if (element_identifier && groupedWidgets[element_identifier]) {
        groupedWidgets[element_identifier].forEach((widget, idx) => {
          if (idx === 0) {
            const adSpan = createAdSpan(widget.widget_type, idx);
            element.appendChild(adSpan);
          }
        });
      }
    });
  };

  const loadDPandaScript = () => {
    return new Promise((resolve, reject) => {
      if (document.getElementById("dpanda-widget")) {
        resolve();
        return;
      }

      const scriptTag = document.createElement("script");
      scriptTag.type = "text/javascript";
      scriptTag.src = "https://master.dpanda-buy-widget.pages.dev/widget.js";
      scriptTag.id = "dpanda-widget";

      scriptTag.onload = () => resolve();
      scriptTag.onerror = () =>
        reject(new Error("Failed to load DPanda script"));

      document.body.appendChild(scriptTag);
    });
  };

  const initializeDPandaWidget = async () => {
    try {
      await loadDPandaScript();

      if (typeof window.DPWidget !== "undefined") {
        await replaceDpandaWidgetPlaceholders();
        window.DPWidget.render({ key: publisher_eid });
        console.log("publisher_eid", publisher_eid);
      } else {
        console.error("DPWidget is not available.");
      }
    } catch (error) {
      console.error("Failed to initialize DPanda widget:", error);
    }
  };

  useEffect(() => {
    initializeDPandaWidget();
  }, []);

  return (
    <>
      <span
        dpanda-widget="true"
        identifier="dpanda-2"
        id="scratch-container"
      ></span>
    </>
  );
};

export default DPandaWidget;
