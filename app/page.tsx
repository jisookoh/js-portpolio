import { PrimaryLayout } from "@app/components/layout";
import { HeroSection } from "@app/components/main";

export default function Home() {
  return (
    <div style={{ height: "2000px" }}>
      <PrimaryLayout>
        <HeroSection />
      </PrimaryLayout>
    </div>
  );
}
