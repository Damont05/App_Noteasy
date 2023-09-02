//******************APP NOTE***********************/
//01-08-2023 - AUTHOR:Damont  - backend startup
//*************************************************/
import app from "./app.js";
import "./utils/db.js";


//server on port
app.listen(app.get("port"));
console.log(`Server on port ==> ${app.get("port")}`);

