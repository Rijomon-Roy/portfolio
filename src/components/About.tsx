import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-[#1f2937] dark:to-[#0f172a] text-gray-800 dark:text-white px-6 lg:px-24 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
        {/* Left Side: Developer Bio */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400">
            About Me
          </h1>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I am a passionate and driven full-stack developer, constantly
            seeking to build scalable, efficient, and user-friendly web
            applications. With a strong foundation in modern JavaScript and web
            technologies, I specialize in both front-end and back-end
            development, leveraging frameworks like React.js, Node.js, and
            Express to create seamless digital experiences.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            My expertise also extends to database design, API development, and
            cloud deployment, ensuring that the applications I build are not
            only functional but also highly maintainable and performant.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I regularly practice Data Structures and Algorithms on platforms
            like LeetCode to sharpen my problem-solving abilities. I’m also
            familiar with AI and machine learning principles and look forward to
            integrating them into future projects.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Outside of coding, I contribute to open-source projects, write
            technical blogs, and mentor junior developers. I believe in
            continuous learning and strive to work on impactful projects that
            solve real-world problems.
          </p>
        </motion.div>

        {/* Right Side: SVG Line Art Animation */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/hand.gif"
            alt="Animated cat chasing"
            className="w-full max-w-md "
          />
        </motion.div>
      </div>
    </section>
  );
}
