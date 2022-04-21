import express from "express";

import cvController from '../controllers/cvController';
let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", cvController.getIndex);

    router.get("/webhook", cvController.getWebhook);
    router.post("/webhook", cvController.postWebhook);

    return app.use("/", router);
};

module.exports = initWebRoutes;