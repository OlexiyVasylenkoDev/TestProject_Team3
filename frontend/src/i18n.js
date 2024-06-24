import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        catalog: "Product catalog",
        find: "Find",
        cabinet: "Cabinet",
        comparison: "Comparison",
        want: "What you want",
        cart: "Shopping cart",
        search: "Search for products",
        top: "top seller",
        cardInfo: "Set of plates for the kitchen Gravis",
      },
    },
    uk: {
      translation: {
        catalog: "Каталог товарів",
        find: "Знайти",
        cabinet: "Кабінет",
        comparison: "Порівняння",
        want: "Бажане",
        cart: "Кошик",
        search: "Пошук товарів",
        top: "топ продаж",
        cardInfo: "Набір тарілок для кухні Gravis",
      },
    },
  },
  lng: "uk", // Default language
  fallbackLng: "uk", // Fallback language if translation not available
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
