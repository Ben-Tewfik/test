import Image from "next/image";
import { Inter } from "next/font/google";
// import Navbar from "@/components/navbar/Navbar";

import Hero from "@/components/hero/Hero";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
