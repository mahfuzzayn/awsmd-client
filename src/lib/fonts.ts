import localFont from "next/font/local";

export const freigeistConsSans = localFont({
  src: [
    {
      path: "../fonts/freigeist-con/Freigeist-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/freigeist-con/Freigeist-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/freigeist-con/Freigeist-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/freigeist-con/Freigeist-Black.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-freigeist-cons",
});
