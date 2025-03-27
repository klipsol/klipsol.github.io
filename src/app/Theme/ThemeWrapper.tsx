import themeconfig from "../../../Data/themeconfig.json";

export default function ThemeWrapper({ children, className = "", publisher }) {
  const publisherTheme = themeconfig[publisher] ?? themeconfig.default;

  console.log({ publisher });
  return (
    <main className="pb-[4rem] lg:pb-[2.5rem]"
      style={
        {
          "--primary-color": publisherTheme["primary-color"],
          "--secondary-color": publisherTheme["secondary-color"],
          "--action-color": publisherTheme["action-color"],
          "--brand-color": publisherTheme["8 19 56"],
        } as React.CSSProperties
      }
    >
      {children}
    </main>
  );
}
