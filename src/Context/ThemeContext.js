import React, { createContext, useEffect, useState } from "react";
import { ThemeChanger } from "../Pages/items";

const ThemeContext = createContext();

const getTheme = () => {
  if (!ThemeChanger) {
    localStorage.setItem("ThemeChanger", "dark-theme");
    return "dark-theme";
  } else {
    return ThemeChanger;
  }
};
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getTheme);

  function toggleTheme() {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  }

  useEffect(() => {
    const refreshTheme = () => {
      localStorage.setItem("theme", theme);
    };

    refreshTheme();
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };

