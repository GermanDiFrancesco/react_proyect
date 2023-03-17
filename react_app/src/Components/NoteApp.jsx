import React, { useState, useEffect } from "react";
import NoteForm from "./Forms/NoteForm";
import NoteList from "./Forms/NoteList";

function NoteApp() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes"));
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNewNoteToList = (newNote) => {
    setNotes([...notes, newNote]);
  };

  return (
    <div>
      <h1>Note List App</h1>
      <NoteForm addNewNoteToList={addNewNoteToList} />
      <NoteList notes={notes} />
    </div>
  );
}

export default NoteApp;
