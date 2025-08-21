import Image from "next/image";
import Section4 from "./section-4";
import Section3 from "./section-3";
import Section2 from "./section-2";
import Section1 from "./section-1";

export default function Home() {
  return (<div>
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
  </div>);
}
