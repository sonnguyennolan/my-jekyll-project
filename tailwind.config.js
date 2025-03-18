module.exports = {
    darkMode: 'class',
    content: [
        "./_includes/**/*.{html,js}",
        "./_layouts/**/*.{html,js}",
        "./_docs/**/*.{html,md}",
        "./index.md",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#3490dc",
                secondary: "#ffed4a",
            },
        },
    },
    plugins: [],
};
