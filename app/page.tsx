import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Lab } from "@/components/sections/Lab";
import { Academy } from "@/components/sections/Academy";
import { Community } from "@/components/sections/Community";
import { Manifesto } from "@/components/sections/Manifesto";
import { FinalCta } from "@/components/sections/FinalCta";
import { site } from "@/lib/site";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  email: site.email,
  slogan: site.mission,
  description: site.description,
  areaServed: "Latinoamérica",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Lab />
        <Academy />
        <Community />
        <Manifesto />
        <FinalCta />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
