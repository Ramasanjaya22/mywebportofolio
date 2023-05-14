import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import { Analytics } from '@vercel/analytics/react';
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const threeScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
    );
    document.getElementsByTagName("head")[0].appendChild(threeScript);
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, []);
  
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
      <Analytics />
      </ThemeProvider>
  )
}
