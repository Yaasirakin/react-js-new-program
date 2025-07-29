import { useTheme } from "./ThemeContext";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? 
      <img src="src/assets/images/icon-moon.svg" alt="" />

      : 
      <div className="bg-[#333333] w-8 py-3 px-3 items-center ">
        <img className="w-[15px] " src="src/assets/images/icon-sun.svg" alt="" />
      </div>

      }
    </button>
  );
};