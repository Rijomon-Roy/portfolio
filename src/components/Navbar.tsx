import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <nav className="bg-[#111827] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 to-pink-500 text-white text-2xl font-bold italic shadow-md border-2 border-white">
            R
          </div>
        </div>

        {/* Links + Language */}
        <ul className="flex gap-6 items-center font-medium">
          <li>
            <Link
              to="/about"
              className="hover:text-yellow-400 transition-colors duration-200"
            >
              {t("about")}
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="hover:text-yellow-400 transition-colors duration-200"
            >
              {t("projects")}
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-yellow-400 transition-colors duration-200"
            >
              {t("contact")}
            </Link>
          </li>
          <li>
            <select
              onChange={handleLanguageChange}
              defaultValue={i18n.language}
              className="bg-white text-gray-800 rounded px-2 py-1 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="en">English</option>
              <option value="ml">മലയാളം</option>
              <option value="hi">हिन्दी</option>
            </select>
          </li>
        </ul>
      </div>
    </nav>
  );
}
