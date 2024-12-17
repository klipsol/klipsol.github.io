export { };
declare global {
    interface Window {
        Calendly: any,
        DPWidget: any,
    }
    
interface Metadata {
    title: string,
    description: string,
    openGraph: {
        title: string,
        description: string,
        images: Array<string>
    }
  }
  
  interface VideoConfig {
    "1": string,
    "2a": string,
    "2b": string,
    "3b": string,
    "4b": string
  }
  
  interface ThemeConfig {
    "primary-color": string,
    "secondary-color": string,
    "action-color": string,
    "brand-color": string,
  }
}