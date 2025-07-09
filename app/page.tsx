import { PrimaryLayout } from "@app/components/layout";
import { HeroSection, ProjectSection } from "@app/components/main";

export default function Home() {
  return (
    <div>
      <PrimaryLayout>
        <HeroSection />
        <ProjectSection />
      </PrimaryLayout>
    </div>
  );
}
