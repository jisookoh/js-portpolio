import { PrimaryLayout } from "@app/components/layout";
import { BubblesCanvas, TextBanner } from "@app/components/main";

export default function Home() {
  return (
    <div>
      <PrimaryLayout>
        <BubblesCanvas />
        <TextBanner />
      </PrimaryLayout>
    </div>
  );
}
