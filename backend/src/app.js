import express from "express";
import morgan from "morgan";
import noteRoute from "./routes/notes.routes.js";

const app = express();

//setting
app.set("port", process.env.PORT || 3000);

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use(noteRoute);

app.use((req, res, next) => {
    res.status(404).render("404");
});

export default app;