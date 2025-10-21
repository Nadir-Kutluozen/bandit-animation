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
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div className={inconsolata.className}>
      <Component {...pageProps} />
    </div>
  );
}
