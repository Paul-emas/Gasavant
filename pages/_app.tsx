import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Bitter } from "@next/font/google";

const bitter = Bitter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={bitter.className}>
      <Component {...pageProps} />
    </main>
  );
}
