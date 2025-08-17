import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About"; // import About

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section id="about" className="h-screen bg-gray-600 text-white">
        <About /> {/* Show About below Hero */}
      </section>
    </div>
  );
}
