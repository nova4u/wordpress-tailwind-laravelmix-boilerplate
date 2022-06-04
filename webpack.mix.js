require("dotenv").config();
const mix = require("laravel-mix");
require("mix-tailwindcss");

mix.sass("./assets/sass/app.scss", "css");
mix.js("./assets/js/app.js", "js");
mix.tailwind("tailwind.config.js");
mix.setPublicPath("build");

// Create an .env file and make a variable LOCAL_HOST for it in order to function properly.
// Example: LOCAL_HOST=http://shopzdev.local/

mix.browserSync({
  proxy: process.env.LOCAL_HOST,
  injectChanges: true,
  open: false,
  files: ["./*.{css,js,php}", "templates/**/*.php", "build/**/*.{css,js}"],
});
