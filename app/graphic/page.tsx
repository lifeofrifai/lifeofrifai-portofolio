import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SectionHeader } from "@/components/shared/section-header";
import { MasonryGallery } from "@/components/graphic/masonry-gallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Graphic Design",
  description:
    "Visual identities, logos, posters, and communication materials.",
};

export default function GraphicPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Graphic Design"
            title="Visual identities & communication"
            description="Logos, branding, posters, and social media assets — visual work that communicates clearly and memorably."
          />
          <MasonryGallery />
        </div>
      </main>
      <Footer />
    </>
  );
}
