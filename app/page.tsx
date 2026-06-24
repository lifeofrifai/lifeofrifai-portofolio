import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { PathCards } from "@/components/home/path-cards";
import { SelectedWork } from "@/components/home/selected-work";
import { ExperiencePreview } from "@/components/home/experience-preview";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-14">
        <Hero />
        <PathCards />
        <SelectedWork />
        <ExperiencePreview />
      </main>
      <Footer />
    </>
  );
}
