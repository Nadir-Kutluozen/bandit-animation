import { AppProps } from "next/app";
import { Inconsolata } from "next/font/google";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inconsolata.className}>
      <Component {...pageProps} />
    </div>
  );
}
