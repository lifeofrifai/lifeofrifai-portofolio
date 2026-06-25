import { MasonryGallery } from "@/components/graphic/masonry-gallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Graphic Design",
  description: "Visual identities, logos, posters, and communication materials.",
};

export default function GraphicPage() {
  return (
    <div className="gr-container">
      <p className="gr-eyebrow anim-fade-in">Universe 03</p>
      <h1 className="gr-h1 anim-fade-up delay-100">
        Visual Work.
        <br />
        <span>Brand. Poster. Story.</span>
      </h1>
      <p className="gr-lead anim-fade-up delay-200">
        Logos, identity systems, posters, and social media — visual work that
        communicates before you read a single word.
      </p>

      <div className="anim-fade-up delay-300">
        <MasonryGallery />
      </div>
    </div>
  );
}
