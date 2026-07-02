import { ScrollProgress } from "@/components/ScrollProgress";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Capabilities } from "@/components/Capabilities";
import { TechStack } from "@/components/TechStack";
import { Cases } from "@/components/Cases";
import { Timelines } from "@/components/Timelines";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Services />
        <Capabilities />
        <TechStack />
        <Cases />
        <Timelines />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
