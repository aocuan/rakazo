export const BRAND_KIT_PATH = "/brand/";
export const MARK_SVG_PATH = "/brand/kit/nino-bot-mark.svg";

export const BRAND_LOGOS = [
  {
    name: "Logo",
    file: "/brand/kit/nino-bot-logo.png",
    preview: "/brand/kit/nino-bot-logo-preview.webp",
    format: "PNG · 1462 × 576",
  },
  {
    name: "Mark",
    file: MARK_SVG_PATH,
    preview: MARK_SVG_PATH,
    format: "SVG",
  },
  {
    name: "App icon",
    file: "/brand/kit/nino-bot-icon.png",
    preview: "/brand/kit/nino-bot-icon-preview.webp",
    format: "PNG · 1024 × 1024",
  },
] as const;

export const BRAND_COLORS = [
  { name: "Orange", hex: "#F5A03C" },
  { name: "Black", hex: "#141414" },
  { name: "White", hex: "#FFFFFF" },
] as const;
