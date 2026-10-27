import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import ServiceBento from "@/components/home/ServiceBento";
import EcoBand from "@/components/home/EcoBand";
import HowItWorks from "@/components/home/HowItWorks";
import PriceExplorer from "@/components/home/PriceExplorer";
import ReviewsTeaser from "@/components/home/ReviewsTeaser";
import CtaBand from "@/components/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <ServiceBento />
      <EcoBand />
      <HowItWorks />
      <PriceExplorer />
      <ReviewsTeaser />
      <CtaBand />
    </>
  );
}
