//******************NOTES CONTROLLERS***********************/
//02-08-2023 - AUTHOR:Damont - NOTES CRUD
//*************************************************/

import Note from "../models/note_schema.js";

export const createNote = async (req, res, next) => {
        
        const note = new Note(req.body);
        await note.save()
            .then(notes => {
                return res.status(200).json({ok:true, notes});
            })
            .catch((err)=>res.json({err}));
};

export const getNotes = async (req, res, next) => {
    try {
        const notes = new Note.find().lean();
        res.render("index", {
            notes,
        });
    } catch (err) {
        return res.json({
                    message: err.message,
                    error: err
                });
    }
};

export const deleteNotes = async (req, res, next) => {

};

export const editNotes = async (req, res, next) => {

};