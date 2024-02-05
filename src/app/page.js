import Hero from "@/components/Hero";
import MySkills from "@/components/MySkills";
import MyStory from "@/components/MyStory";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero />
      <MyStory />
      <MySkills />
    </div>

  );
}
