import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createI18n } from "vue-i18n";
import { useTheme } from "./composables/useTheme";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const { initTheme } = useTheme();
initTheme();

const app = createApp(App);
gsap.registerPlugin(ScrollTrigger);
const messages = {};
const locales = import.meta.glob("./locales/**/**.json", { eager: true });

for (const path in locales) {
  const matched = path.match(/\.\/locales\/([^/]+)\/(.*)\.json$/);
  if (matched) {
    const locale = matched[1];
    const namespace = matched[2];

    if (!messages[locale]) {
      messages[locale] = {};
    }

    messages[locale][namespace] = locales[path].default;
  }
}

const i18n = createI18n({
  locale: "fr",
  fallbackLocale: "en",
  messages,
  legacy: false,
});


app.use(i18n);
app.use(router);

app.mount("#app");
