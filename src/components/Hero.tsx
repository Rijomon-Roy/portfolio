import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Typewriter } from "react-simple-typewriter";

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [showWelcome, setShowWelcome] = useState(true);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  // ✅ safely cast to string[]
  const roles = t("hero.role", { returnObjects: true }) as string[];

  const skills = [
    "React.js",
    "Node.js",
    "MongoDB",
    "JavaScript",
    "Python",
    "TypeScript",
    "Next.js",
    "Express.js",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "Git & GitHub",
    "Redux",
    "REST APIs",
    "Docker",
    "Firebase",
    "MySQL",
    "GraphQL",
    "Sass",
    "Material UI",
  ];

  const visibleSkills = showMore ? skills : skills.slice(0, 6);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-[#1f2937] dark:to-[#0f172a] text-gray-800 dark:text-white px-8 lg:px-20 relative">
      {/* Welcome Popup */}
      {showWelcome && (
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-white/90 dark:bg-gray-900/90 border border-blue-400 text-gray-800 dark:text-gray-100 shadow-lg rounded-2xl px-6 py-3 text-center w-full max-w-md z-50 backdrop-blur-md animate-fade-in-out">
          <p className="text-lg sm:text-xl font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
            {t("hero.welcome")}
          </p>
        </div>
      )}

      {/* Main Container */}
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
            {t("hero.greeting")}{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 dark:from-purple-400 dark:to-pink-500 bg-clip-text text-transparent">
              Rijomon Roy
            </span>
          </h1>

          {/* ✅ Typewriter roles */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 dark:text-blue-400">
            <Typewriter
              words={roles}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl text-lg font-light leading-relaxed">
            {t("hero.description")}
          </p>
          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <FaDownload /> {t("hero.resume")}
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 border border-blue-500 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition duration-300"
            >
              <FaEnvelope /> {t("hero.connect")}
            </a>
          </div>
          {/* Skills */}
          <div className="mt-8">
            <h3 className="font-semibold mb-4 text-gray-700 dark:text-gray-300 text-lg">
              {t("hero.skills")}
            </h3>
            <div className="flex flex-wrap gap-3">
              {visibleSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1.5 rounded-full border border-gray-300 dark:border-gray-600 text-sm font-medium bg-white/70 dark:bg-gray-800/50 backdrop-blur-md"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Show More / Show Less Button */}
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-4 px-5 py-2 border border-blue-500 text-blue-600 dark:text-blue-400 rounded-full font-medium hover:bg-blue-600 hover:text-white transition duration-300"
            >
              {showMore ? t("hero.showLess") : t("hero.showMore")}
            </button>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-5 text-xl mt-8">
            {[
              { icon: <FaGithub />, link: "https://github.com/Rijomon-Roy" },
              {
                icon: <FaLinkedin />,
                link: "https://linkedin.com/in/rijoroy-dev",
              },
              {
                icon: <FaEnvelope />,
                link: "mailto:rijoroykallattu@gmail.com",
              },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/80 dark:bg-gray-800/70 shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right - Profile Image */}
        <div className="flex-1 flex justify-center">
          <div className="rounded-[2rem] overflow-hidden shadow-2xl p-[4px] bg-gradient-to-r from-blue-500 to-purple-600">
            <img
              src="/profile.jpg"
              alt="Rijomon Roy"
              className="w-[22rem] h-[22rem] object-cover rounded-[1.8rem] hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
