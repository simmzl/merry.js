const path = require("path");

module.exports = {
    entry: {
        merry: "./src/merry.js",
        test: "./src/test/test.js"
    },
    output: {
        filename: "[name].min.js",
        path: path.resolve(__dirname, "dist")
    }
};