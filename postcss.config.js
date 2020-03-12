const production = !process.env.ROLLUP_WATCH;
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
    plugins: [
        require("postcss-import")(),
        require("tailwindcss"),
        require("autoprefixer"),
        require('@tailwindcss/ui'),
        // Only purge css on production
        production &&
        purgecss({
            content: ["./**/*.html", "./**/*.svelte"],
            defaultExtractor: content => content.match(/[\w-/.:]+(?<!:)/g) || []
        })
    ]
};