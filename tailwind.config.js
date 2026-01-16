/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#000000",
                primary: "#EF4444", // Red
                secondary: "#FACC15", // Yellow
                accent: {
                    blue: "#3B82F6", // Glow blue
                }
            },
            fontFamily: {
                montserrat: ["Montserrat", "sans-serif"],
                roboto: ["Roboto", "sans-serif"],
            },
        },
    },
    plugins: [],
}
