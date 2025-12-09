import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Steps } from "./components/Steps";
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";
import { FAQ as FaqSection } from "./components/FAQ";
import { CTABanner } from "./components/CTABanner";
import { Footer } from "./components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-zinc-950/70 border-b border-zinc-200 dark:border-zinc-800">
        <div className="container-page flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <Image src="/instant-store-logo.svg" alt="Instant Store" width={32} height={32} />
            <span className="font-semibold text-sm">Instant Store</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="hover:text-indigo-600 dark:hover:text-indigo-300 transition">Features</a>
            <a href="#pricing" className="hover:text-indigo-600 dark:hover:text-indigo-300 transition">Pricing</a>
            <a href="#faq" className="hover:text-indigo-600 dark:hover:text-indigo-300 transition">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#pricing"
              className="rounded-full px-4 py-2 text-xs font-medium bg-linear-to-r from-indigo-500 to-cyan-500 text-white shadow-sm hover:shadow-glow transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>
      <main>
        <Hero />
        <Features />
        <Steps />
        <Pricing />
        <Testimonials />
        <div id="faq">
          <FaqSection />
        </div>
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
