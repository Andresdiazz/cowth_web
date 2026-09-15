import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Lab } from "@/components/sections/Lab";
import { GrowthPartner } from "@/components/sections/GrowthPartner";
import { Academy } from "@/components/sections/Academy";
import { Community } from "@/components/sections/Community";
import { Manifesto } from "@/components/sections/Manifesto";
import { FinalCta } from "@/components/sections/FinalCta";
import { getDictionary, isLocale } from "@/lib/i18n";
import { site } from "@/lib/site";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    email: site.email,
    slogan: dict.brand.mission,
    description: dict.meta.description,
    areaServed: ["Latinoamérica", "España", "United States"],
  };

  return (
    <>
      <Navbar dict={dict} lang={lang} />
      <main>
        <Hero dict={dict} />
        <About dict={dict} />
        <Lab dict={dict} />
        <GrowthPartner dict={dict} />
        <Academy dict={dict} />
        <Community dict={dict} />
        <Manifesto dict={dict} />
        <FinalCta dict={dict} />
      </main>
      <Footer dict={dict} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
