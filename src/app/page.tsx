import { BackgroundBeamsDemo } from "@/components/ContactUs";
import { CardHoverEffectDemo } from "@/components/ProductSection";
import { HeroParallaxDemo } from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroParallaxDemo />
      <CardHoverEffectDemo />
      <BackgroundBeamsDemo />
    </>
  );
}
