import React from 'react';
import { createContext, useContext, useState, useEffect } from "react";

// Create a `ThemeContext` object using `React.createContext()`
const ThemeContext = createContext();

// Implement the `ThemeProvider` component. It should accept a `children` prop and return a `ThemeContext.Provider` component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook
export const useTheme = () => useContext(ThemeContext);
