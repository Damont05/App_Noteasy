//******************ROUTE NOTES***********************/
//01-08-2023 - AUTHOR:Damont - NOTES CRUD
//*************************************************/

import { Router } from "express";
import{
    createNote 
} from "../controllers/notes.controller.js";

const router = Router();

// GET NOTES
//router.get("/notes", getNotes);

//CREATE NOTE
router.post("/create/note", createNote);


export default router;