import { createContext, useEffect, useState } from "react"

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")

    console.log("theme", theme)

    useEffect(() => {
        const root = window.document.documentElement;

        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }

        localStorage.setItem("theme", theme);


    }, [theme])

    const toggleTheme = () => {
       setTheme((prev) => (prev === "light" ? "dark" : "light"));
    }

    return (

        <ThemeContext.Provider value={{ toggleTheme, theme }}>
            {children}
        </ThemeContext.Provider>

    )

}