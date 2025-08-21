
import Section4 from "./section-4";
import Section3 from "./section-3";
import Section2 from "./section-2";
import Section1 from "./section-1";

export default function Home() {
  return (
  <div className="h-screen w-full flex flex-col">
  <div className="flex-1"><Section1 /></div>
  <div className="flex-1"><Section2 /></div>
  <div className="flex-1"><Section3 /></div>
  <div className="flex-1"><Section4 /></div>
</div>
  );
}
