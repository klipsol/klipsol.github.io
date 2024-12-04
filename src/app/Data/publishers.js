const buyWidgetSites = [
  { name: "nymag", url: "https://nymag.dpanda-buy-widget.pages.dev/" },
  { name: "buzzfeed", url: "https://buzzfeed.dpanda-buy-widget.pages.dev/" },
  { name: "gq", url: "https://gq.dpanda-buy-widget.pages.dev/" },
  { name: "fandom", url: "https://fandom.dpanda-buy-widget.pages.dev/" },
  { name: "techradar", url: "https://techradar.dpanda-buy-widget.pages.dev/" },
  { name: "people", url: "https://people.dpanda-buy-widget.pages.dev/" },
  { name: "tmb", url: "https://tmb.dpanda-buy-widget.pages.dev/" },
  { name: "theBump", url: "https://thrivemarket.dpanda-buy-widget.pages.dev" },
  { name: "the-bump", url: "https://thrivemarket.dpanda-buy-widget.pages.dev" },
];

export const getWidgetUrl = (siteName) => {
  const normalizedName = siteName.toLowerCase();

  const site = buyWidgetSites.find(
    (s) => s.name.toLowerCase() === normalizedName
  );
  return site ? site : null;
};
