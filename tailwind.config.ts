import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: 'url("/images/banner.png")',
      },
      colors: {
        "bg-green": "#645F25",
      },
      boxShadow: {
        shadow1: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
      },
      fontFamily: {
        "font-merri-sans": ["Merriweather Sans", "-apple-system"],
      },
    },
  },
  plugins: [],
};
export default config;
