import { EventsSection } from "../module/events-section";
import { Header } from "../module/header";
import { SponsorsSection } from "../module/sponsors-section";

export default function Home() {
  return (
    <>
      <Header />
      <EventsSection />
      <SponsorsSection />
    </>
  );
}
