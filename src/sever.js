import express from "express";
import viewEngine from "./configs/cvController";
import bodyParser from "body-parser";
import initWebRoute from "./routes/web";

require("dotenv").config();


let app = express();

//config view engine 
viewEngine(app);

//parser request to json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//init webroutes
initWebRoute(app);


let port = process.env.PORT || 4468;

app.listen(port, () => {
    console.log("System dang chay: " + port);
})
