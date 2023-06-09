import app from "./app.js";
import { mongoDb } from "./db.js";

mongoDb()
app.listen(3000)
console.log("escuchando puerto 3000");