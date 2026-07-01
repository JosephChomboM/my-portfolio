import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Work } from "./components/Work";
import { AIEngineering } from "./components/AIEngineering";
import { Architecture } from "./components/Architecture";
import { DataRetrieval } from "./components/DataRetrieval";
import { TechStack } from "./components/TechStack";
import { About } from "./components/About";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div
      style={{
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
        backgroundColor: "#F2EEE6",
        minHeight: "100vh",
      }}
    >
      <Navigation />
      <Hero />
      <Work />
      <AIEngineering />
      <Architecture />
      <DataRetrieval />
      <TechStack />
      <About />
      <Footer />
    </div>
  );
}
