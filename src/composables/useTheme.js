// src/composables/useTheme.js
import { ref } from "vue";

export function useTheme() {
  const theme = ref("");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    theme.value = "dark";
  } else {
    theme.value = "light";
  }

  const toggleTheme = async (e) => {
    theme.value = theme.value === "light" ? "dark" : "light";

    const triggerX = e.clientX;
    const triggerY = e.clientY;

    await document.startViewTransition(() => {
      if (theme.value === "dark") {
        document.getElementById('app').classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.getElementById('app').classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }).ready;

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0 at ${triggerX}px ${triggerY}px)`,
          `circle(2000px at ${triggerX}px ${triggerY}px)`,
        ],
      },
      {
        duration: 1000,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  const initTheme = () => {
    const userPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme) {
      theme.value = savedTheme;
    } else {
      theme.value = userPrefersDark ? "dark" : "light";
      localStorage.setItem("theme", theme.value);
    }

    if (theme.value === "dark") {
      document.getElementById('app').classList.add("dark");
    } else {
        document.getElementById('app').classList.remove("dark");
    }
  };

  return { theme, toggleTheme, initTheme };
}
