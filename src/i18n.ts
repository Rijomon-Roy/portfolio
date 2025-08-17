import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
      hero: {
        welcome: "Welcome to my digital space ✨",
        greeting: "Hi, I'm",
        role: [
          "React Developer",
          "Software Engineer",
          "MERN Stack Developer",
          "Full Stack Developer",
          "Open Source Enthusiast",
        ],
        description:
          "I craft high-performance full-stack web experiences with the MERN stack. Clean, scalable, and user-focused design is my passion.",
        resume: "Resume",
        connect: "Connect",
        skills: "Best Skills",
        showMore: "Show More ▼",
        showLess: "Show Less ▲",
      },
    },
  },
  ml: {
    translation: {
      about: "കുറിച്ച്",
      projects: "പ്രോജക്റ്റുകൾ",
      contact: "ബന്ധപ്പെടുക",
      hero: {
        welcome: "എന്റെ ഡിജിറ്റൽ സ്പേസിലേക്ക് സ്വാഗതം ✨",
        greeting: "ഹായ്, ഞാൻ",
        role: [
          "React ഡെവലപ്പർ",
          "സോഫ്റ്റ്വെയർ എൻജിനീയർ",
          "MERN സ്റ്റാക്ക് ഡെവലപ്പർ",
          "ഫുൾ സ്റ്റാക്ക് ഡെവലപ്പർ",
          "ഓപ്പൺ സോഴ്സ് ആസ്വാദകൻ",
        ],
        description:
          "ഞാൻ MERN സ്റ്റാക്ക് ഉപയോഗിച്ച് ഉയർന്ന പ്രകടന ശേഷിയുള്ള വെബ് അനുഭവങ്ങൾ നിർമ്മിക്കുന്നു. ശുചിത്വം, സ്കെയിലബിൾ, ഉപയോക്തൃ കേന്ദ്രീകൃതമായ ഡിസൈൻ എന്റെ പ്രിയമാണ്.",
        resume: "റെസ്യൂം",
        connect: "ബന്ധപ്പെടുക",
        skills: "മികച്ച കഴിവുകൾ",
        showMore: "കൂടുതൽ കാണിക്കുക ▼",
        showLess: "കുറച്ച് മാത്രം ▲",
      },
    },
  },
  hi: {
    translation: {
      about: "हमारे बारे में",
      projects: "परियोजनाएँ",
      contact: "संपर्क करें",
      hero: {
        welcome: "मेरे डिजिटल स्पेस में आपका स्वागत है ✨",
        greeting: "नमस्ते, मैं हूँ",
        role: [
          "React डेवलपर",
          "सॉफ्टवेयर इंजीनियर",
          "MERN स्टैक डेवलपर",
          "फुल स्टैक डेवलपर",
          "ओपन सोर्स उत्साही",
        ],
        description:
          "मैं MERN स्टैक के साथ उच्च प्रदर्शन वाली वेब एप्लिकेशन बनाता हूँ। साफ-सुथरा, स्केलेबल और यूज़र-केंद्रित डिज़ाइन मेरा पैशन है।",
        resume: "रिज़्यूमे",
        connect: "संपर्क करें",
        skills: "सर्वश्रेष्ठ स्किल्स",
        showMore: "और देखें ▼",
        showLess: "कम देखें ▲",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
