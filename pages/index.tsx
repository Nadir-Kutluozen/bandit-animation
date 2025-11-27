import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Wishlist from "@/components/Wishlist";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bandit Animation - Animation for React</title>
        <meta name="description" content="Turn your svg into React components instantly." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Hero />
        <HowItWorks />
        <Features />
        {/* <Wishlist /> */}

        {/* Footer */}
        <footer className="container text-center py-4 text-secondary border-top border-secondary opacity-50">
          <p className="mb-0">&copy; {new Date().getFullYear()} Bandit Animation. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}
