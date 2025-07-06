/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                lightBg: "#DDE6ED",
                lightSecondaryBg: "#9DB2BF",
                darkBg: "#27374D",
                darkSecondaryBg: "#526D82",
                accentBlue: "#0A84FF",
            },
            fontFamily: {
                heading: ["Pretendard", "sans-serif"],
                body: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
};
