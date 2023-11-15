const express = require("express");
const Note = require("../models/Note");
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");
const router = express.Router();

//Route 1: get all the notes using GET : /api/notes/fetchallnotes - Login Required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes);  
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Error Occured");
    }
});

//Route 2: Add a note using Post : /api/notes/addnote - Login Required
router.post("/addnote", fetchuser, [
    body("title", "Name must be of atleast 3 characters").isLength({ min: 3 }),
    body("description", "Description must be atleast 5 characters").isLength({ min: 5 })
], async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        // If there are errors, return bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const note = new Note({
            title, description, tag, user: req.user.id
        });
        const savedNote = await note.save();
        res.json(savedNote);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Error Occured");
    }
});

//Route 3:Update an exisiting note using put : /api/notes/updatenote - Login Required
router.put("/updatenote/:id", fetchuser, async (req, res) => {
    const{title, description, tag}=req.body;
    //Create a newNote object
    const newNote={};
    if(title) {newNote.title= title};
    if(description) {newNote.description= description};
    if(tag) {newNote.tag= tag};

    //Find the note to be updated and update it
    let note= await Note.findById(req.params.id);
    if(!note){return res.status(404).send("Not found!")};

    //Check if the user is same i.e, the user whose note it is and who want to update it
    if(note.user.toString()!== req.user.id){
        return res.status(401).send("Not Allowed");
    }

    note= await Note.findByIdAndUpdate(req.params.id, {$set: newNote}, {new: true});
    res.json(note);
});

//Route 4:Delete an exisiting note using delete : /api/notes/deletenote - Login Required
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
    try {
         //Find the note to be deleted and delete it
    let note= await Note.findById(req.params.id);
    if(!note){return res.status(404).send("Not found!")};

    //Check if the user is same i.e, the user whose note it is and who want to delete it
    if(note.user.toString()!== req.user.id){
        return res.status(401).send("Not Allowed");
    }

    note= await Note.findByIdAndDelete(req.params.id);
    res.json({"Success": "Note has been deleted", note:note});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Error Occured");
    }
   
});
module.exports = router