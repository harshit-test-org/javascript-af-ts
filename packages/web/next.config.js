const withTypescript = require("@zeit/next-typescript");
const withFonts = require("next-fonts");
const withPlugins = require("next-compose-plugins");
const withCss = require("@zeit/next-css");

module.exports = withPlugins([withFonts,  withTypescript, withCss]);
