import express from "express";

let configVewEngine = (app) => {
    app.use(express.static('./src/public'));
    app.set("View engine", "ejs");
    app.set("views", "./src/views");
};

module.exports = configVewEngine;