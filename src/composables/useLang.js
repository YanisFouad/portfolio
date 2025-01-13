import { useI18n } from "vue-i18n";

export function useLang() {
  const initLang = () => {
    const localUserLang = localStorage.getItem("lang");
    const { locale } = useI18n();
    if (!localUserLang) {
      const userLang = navigator.language;

      if (userLang.includes("fr")) {
        locale.value = "fr";
        localStorage.setItem("lang", "fr");
      } else {
        locale.value = "en";
        locale.value = localStorage.setItem("lang", "en");
      }
    } else {
      locale.value = localUserLang;
    }

    console.log(locale.value);
    
  };

  return { initLang };
}
